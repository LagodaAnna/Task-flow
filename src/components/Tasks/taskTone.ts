import type { Priority, Status } from './taskTypes'

export const priorityTone: Record<Priority, 'priority-low' | 'priority-medium' | 'priority-high'> = {
  Low: 'priority-low',
  Medium: 'priority-medium',
  High: 'priority-high',
}

export const statusTone: Record<Status, 'status-todo' | 'status-progress' | 'status-done'> = {
  'To do': 'status-todo',
  'In progress': 'status-progress',
  Done: 'status-done',
}
