import { PRIORITY, STATUS, type Priority, type Status } from './taskTypes'

export const priorityTone: Record<
  Priority,
  'priority-low' | 'priority-medium' | 'priority-high'
> = {
  [PRIORITY.LOW]: 'priority-low',
  [PRIORITY.MEDIUM]: 'priority-medium',
  [PRIORITY.HIGH]: 'priority-high',
}

export const statusTone: Record<Status, 'status-todo' | 'status-progress' | 'status-done'> = {
  [STATUS.TODO]: 'status-todo',
  [STATUS.IN_PROGRESS]: 'status-progress',
  [STATUS.DONE]: 'status-done',
}

export const priorityDotColor: Record<Priority, string> = {
  [PRIORITY.LOW]: 'before:bg-priority-low-text',
  [PRIORITY.MEDIUM]: 'before:bg-priority-medium-text',
  [PRIORITY.HIGH]: 'before:bg-priority-high-text',
}

export const statusDotColor: Record<Status, string> = {
  [STATUS.TODO]: 'before:bg-status-todo-text',
  [STATUS.IN_PROGRESS]: 'before:bg-status-progress-text',
  [STATUS.DONE]: 'before:bg-status-done-text',
}
