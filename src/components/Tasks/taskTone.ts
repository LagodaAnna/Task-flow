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
