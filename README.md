# TaskFlow

TaskFlow is a responsive task management application built with React and TypeScript.

The project demonstrates a component-based frontend architecture, typed domain models, reusable UI components, client-side persistence, task filtering and sorting, responsive layouts, and automated testing.

The application was developed as an AI-assisted project using Claude Code, with a focus on understanding, reviewing, and validating generated solutions rather than treating AI-generated code as a black box.

**Project status:** TaskFlow is under active development. The current version implements the core task management functionality, while additional features are planned, including routing, internationalization (i18n), further accessibility improvements, and other production-oriented enhancements.

## Live Demo

[Open TaskFlow](https://lagodaanna.github.io/Task-flow/)

## Features

- Create new tasks
- Edit existing tasks
- Delete tasks with confirmation
- Persist tasks between browser sessions
- Search tasks by title
- Filter tasks by status
- Filter tasks by priority
- Sort tasks by creation date
- Display task statistics
- Responsive desktop, tablet, and mobile layouts
- Separate empty, no-results, and storage-error states
- Reusable task form for both create and edit flows
- Accessible form controls and modal interactions

## Tech Stack

### Core

- React 19
- TypeScript
- Vite
- Tailwind CSS 4

### UI and utilities

- react-day-picker — calendar/date selection
- date-fns — date parsing and formatting
- Native HTML `<dialog>` — modal behavior
- React Portals — modal rendering outside the main application tree

### Testing

- Vitest
- React Testing Library
- Testing Library User Event
- jest-dom
- jsdom

### Code quality

- ESLint
- TypeScript static type checking

## Persistence

Task data is currently stored in the browser using `localStorage`.

A future version can replace the current persistence implementation with an asynchronous API while keeping most presentation components independent from the persistence mechanism.

## Responsive UI

TaskFlow is designed for three responsive ranges:

- Mobile: below 640px
- Tablet: 640px–1023px
- Desktop: 1024px and above

The task presentation adapts to the available screen size, using a table-oriented layout on desktop and task cards on smaller screens.

The application also includes responsive navigation and modal behavior.

## AI-Assisted Development

TaskFlow was developed with the assistance of Claude Code as part of an AI-assisted development workflow.

Claude was used for tasks such as:

- analyzing implementation approaches;
- discussing architectural alternatives;
- assisting with implementation;
- generating and improving tests;
- reviewing code and identifying edge cases;
- exploring accessibility and responsive behavior.

AI-generated suggestions were reviewed before being integrated into the project. Architectural decisions, requirements, implementation trade-offs, debugging, and final code review remained part of the development process.

The goal of using AI in this project was not only to accelerate implementation, but also to practice working effectively with modern AI development tools while maintaining an understanding of the resulting codebase.
