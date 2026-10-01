#!/usr/bin/env bash
# Runs lint, build and tests when Claude changed files during the current turn.
#
#   turn-guard.sh snapshot   UserPromptSubmit hook: fingerprint the working tree
#   turn-guard.sh verify     Stop hook: compare fingerprints, run checks if they differ
#
# Read-only with respect to git: nothing is written to .git or the index.
# Works with bash 3.2 (macOS) and GNU bash (Linux). Requires git and node.

umask 077
cd "${CLAUDE_PROJECT_DIR:-$PWD}" || exit 0

input=$(cat)

json_field() {
  printf '%s' "$input" | node -e '
    let s = "";
    process.stdin.on("data", (d) => (s += d)).on("end", () => {
      try {
        const v = JSON.parse(s)[process.argv[1]];
        process.stdout.write(v == null ? "" : String(v));
      } catch (e) {}
    });
  ' "$1"
}

tmp=${TMPDIR:-/tmp}
tmp=${tmp%/}
session=$(json_field session_id | tr -cd 'A-Za-z0-9_-')
state="$tmp/taskflow-turn-${session:-unknown}"

# Prints one hash covering the path and content of every file that is tracked or
# untracked-but-not-ignored. Deleted files drop out of the list, so deletions
# change the hash too.
tree_hash() {
  local list result
  git rev-parse --git-dir >/dev/null 2>&1 || return 1
  list=$(mktemp "$tmp/taskflow-files.XXXXXX") || return 1

  git ls-files -z --cached --others --exclude-standard |
    while IFS= read -r -d '' path; do
      case $path in *$'\n'*) continue ;; esac
      [ -f "$path" ] && printf '%s\n' "$path"
    done >"$list"

  result=$(paste -d ' ' <(git hash-object --stdin-paths <"$list") "$list" | git hash-object --stdin)
  rm -f "$list"
  [ -n "$result" ] || return 1
  printf '%s\n' "$result"
}

snapshot() {
  # Drop state from sessions that were last used over two days ago.
  find "$tmp" -maxdepth 1 -name 'taskflow-turn-*' -type f -mtime +1 -exec rm -f {} + 2>/dev/null
  tree_hash >"$state" 2>/dev/null || rm -f "$state"
  exit 0
}

verify() {
  local now failures script output

  # No usable snapshot means we cannot tell, so run the checks to be safe.
  if [ -f "$state" ] && now=$(tree_hash 2>/dev/null) && [ "$now" = "$(cat "$state")" ]; then
    exit 0
  fi

  failures=""
  for script in lint build test:run; do
    if ! output=$(npm run "$script" 2>&1); then
      failures="$failures
npm run $script failed (last 40 lines):
$(printf '%s\n' "$output" | tail -n 40)
"
    fi
  done

  [ -z "$failures" ] && exit 0

  # stop_hook_active is true when Claude is already continuing because of this
  # hook: that was the one retry, so let it stop and warn the user instead.
  if [ "$(json_field stop_hook_active)" = "true" ]; then
    node -e '
      process.stdout.write(JSON.stringify({
        systemMessage: "Checks are still failing after one retry:" + process.argv[1],
      }));
    ' "$failures"
    exit 0
  fi

  printf '%s\n' "Verification failed. Fix these problems:$failures" >&2
  exit 2
}

case ${1:-} in
  snapshot) snapshot ;;
  verify) verify ;;
  *)
    echo "usage: turn-guard.sh snapshot|verify" >&2
    exit 1
    ;;
esac
