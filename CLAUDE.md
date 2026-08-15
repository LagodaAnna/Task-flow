## Project

TaskFlow is a small React + TypeScript application used for learning and practicing
modern frontend development and AI-assisted development workflows.

The project should stay simple, readable, and close to production-quality React code
without unnecessary abstractions.

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint

Do not introduce new libraries or dependencies unless explicitly requested.

---

## General Development Rules

### Keep changes scoped

Implement only what was explicitly requested.

Do not:

- refactor unrelated code
- rename unrelated files or components
- introduce additional features
- change architecture without a clear reason
- install dependencies without approval

Prefer the smallest change that correctly satisfies the task.

---

## Before Editing

For tasks that involve multiple files, architecture decisions, or non-trivial changes:

1. Inspect the relevant existing files.
2. Explain the current implementation briefly.
3. Propose an implementation plan.
4. List the files you expect to create or modify.
5. Wait for approval before editing.

For very small and explicitly requested changes, a full planning phase is not necessary.

If the user explicitly says not to modify files, perform analysis only.

---

## React Guidelines

Prefer:

- functional components
- clear component boundaries
- derived values instead of duplicated state
- controlled inputs when state is required
- semantic HTML
- simple composition

Avoid:

- unnecessary state
- unnecessary `useEffect`
- premature memoization
- unnecessary `useMemo` or `useCallback`
- unnecessary wrapper components
- components created only to reduce line count

Use React state only for values that actually change and affect rendering.

Do not store values in state when they can be derived from existing props or state.

---

## TypeScript Guidelines

Avoid `any`.

Prefer:

- explicit domain types when they improve clarity
- union types for finite sets of values
- type narrowing
- type guards when runtime validation is required
- utility types such as `Pick`, `Omit`, and `Partial` when they express relationships
  between existing types

Avoid type assertions (`as`) when the value can reasonably be narrowed or validated.

Prefer deriving related types from an existing source type instead of duplicating
the same property definitions.

Use `import type` for type-only imports when appropriate.

---

## Component Design

Create a separate component when it:

- represents a meaningful UI concept
- is reused
- has its own responsibility
- makes a parent component substantially easier to understand

Do not split components mechanically.

For this project's size, prefer a small and understandable component tree over
complex architectural patterns.

---

## Accessibility

Use semantic HTML whenever possible.

Requirements:

- interactive actions must use appropriate native elements such as `<button>`
- form controls must have accessible labels
- images must have appropriate `alt` text
- icon-only buttons must have accessible names
- preserve keyboard accessibility
- preserve visible focus states

Do not use clickable `<div>` or `<span>` elements when a semantic interactive
element is appropriate.

---

## Responsive UI

When a design specification is provided, treat its breakpoint definitions and
responsive behavior as the source of truth.

Do not infer new breakpoints when they are explicitly defined in the design spec.

Reference screenshots represent example viewport sizes, not breakpoint boundaries.

Implement layouts so they work across the full ranges between reference viewport sizes.

---

## Design Files

When a design package exists, inspect its documentation and assets before implementing UI.

Treat:

- `DESIGN_SPEC.md` as the primary human-readable design specification
- `design-tokens.json` as the source for exact design values
- preview images as visual references
- provided SVG assets as reusable assets

Do not redraw or replace provided assets unless explicitly requested.

If the preview appears to conflict with the written specification, report the conflict
before making assumptions.

---

## Scope Control

Requirements for an individual ticket belong to that ticket or its design specification,
not permanently to this file.

Do not implement future-ticket functionality merely because the UI suggests it.

For example, a visible button does not imply that its behavior should be implemented
unless the current task requires it.

---

## Verification

After implementation, run the project's available verification commands.

At minimum, when available:

npm run lint
npm run build

If tests exist and are relevant, run them as well.

Do not claim that a check passed unless it was actually executed successfully.

After verification, report:

- files changed
- what was implemented
- verification commands executed
- any remaining warnings or limitations

---

## Git

Do not commit, push, create branches, or create pull requests unless explicitly requested.

Do not modify Git history.

Before presenting a completed implementation, review the diff and make sure unrelated
changes were not introduced.

---

## Working Style

Optimize for code that a frontend developer can easily read, review, and maintain.

When multiple implementations are possible, prefer:

1. correctness
2. simplicity
3. readability
4. type safety
5. accessibility
6. consistency with the existing project

Avoid overengineering.
