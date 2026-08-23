export type Priority = 'Low' | 'Medium' | 'High'
export type Status = 'To do' | 'In progress' | 'Done'

export type TaskData = {
  id: string
  title: string
  description: string
  dueDate: string
  priority: Priority
  status: Status
}
