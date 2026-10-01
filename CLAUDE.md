## Project

TaskFlow is a small React + TypeScript app (Vite, Tailwind CSS, ESLint) used for
practicing modern frontend and AI-assisted development. Keep it simple, readable,
and close to production-quality React, without unnecessary abstractions.

Do not add libraries or dependencies unless explicitly requested.

---

## Scope

- Implement only what was requested, with the smallest correct change.
- Do not refactor, rename, or restructure unrelated code.
- Do not implement future-ticket behavior just because the UI suggests it
  (a visible button does not imply its behavior is in scope).
- Ticket requirements belong to the ticket or its design spec, not to this file.

## Before Editing

For multi-file, architectural, or non-trivial changes: inspect the relevant files,
explain the current implementation briefly, propose a plan with the files you expect
to create or modify, and wait for approval before editing.

Small, explicit changes need no plan. If told not to modify files, analyze only.

---

## Conventions

- Components live in `src/components/<Name>/<Name>.tsx` (one folder per component).
- Derive values instead of storing them in state; use state only for values that
  change and affect rendering.
- Derive related types from an existing source type (`Pick`, `Omit`, `Partial`)
  instead of duplicating properties.
- Use `import type` for type-only imports.
- Keep visible focus states, and give icon-only buttons accessible names.

## Design Files

When a design package exists, read it before implementing UI:

- `DESIGN_SPEC.md` is the primary specification; its breakpoints and responsive
  behavior are the source of truth. Do not infer other breakpoints.
- `design-tokens.json` holds the exact values.
- Preview images are visual references only, and show example viewport sizes, not
  breakpoint boundaries. Layouts must work across the full range between them.
- Use the provided SVG assets; do not redraw them.
- If a preview conflicts with the written spec, report the conflict instead of
  assuming.

---

## Testing and Verification

When adding or changing user-facing behavior, add or update tests that check
observable behavior. Prefer accessible queries such as `getByRole`. No snapshot tests
unless requested.

A task is done only when these pass:

- `npm run lint`
- `npm run build`
- `npm run test:run`

A Stop hook (`.claude/hooks/turn-guard.sh`) runs them automatically when files changed
during the turn. If one fails, fix the cause; do not suppress errors or weaken tests.
Report any failure you cannot resolve within the requested scope.

Final report: files changed, what was implemented, and any remaining warnings.

## Git

Do not commit, push, create branches or PRs, or modify history unless explicitly
requested.
