import type { TaskData } from '../components/Tasks/taskTypes'

const STORAGE_KEY = 'taskflow:tasks'

export function getTasks(): TaskData[] {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw === null) return []
  return JSON.parse(raw) as TaskData[]
}

function saveTasks(tasks: TaskData[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

export function createTask(task: TaskData): void {
  saveTasks([task, ...getTasks()])
}

export function updateTask(task: TaskData): void {
  saveTasks(getTasks().map((existing) => (existing.id === task.id ? task : existing)))
}

export function deleteTask(taskId: string): void {
  saveTasks(getTasks().filter((task) => task.id !== taskId))
}
