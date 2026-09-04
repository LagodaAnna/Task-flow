export const PRIORITY = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
} as const

export type Priority = (typeof PRIORITY)[keyof typeof PRIORITY]

export const STATUS = {
  TODO: 'To do',
  IN_PROGRESS: 'In progress',
  DONE: 'Done',
} as const

export type Status = (typeof STATUS)[keyof typeof STATUS]

export type TaskData = {
  id: string
  title: string
  description: string
  dueDate: string
  priority: Priority
  status: Status
}
