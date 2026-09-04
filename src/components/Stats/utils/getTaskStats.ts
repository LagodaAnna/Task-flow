import { STATUS, type TaskData } from '../../Tasks/taskTypes'

export type TaskStats = {
  total: number
  inProgress: number
  completed: number
}

export function getTaskStats(tasks: TaskData[]): TaskStats {
  return {
    total: tasks.length,
    inProgress: tasks.filter((task) => task.status === STATUS.IN_PROGRESS).length,
    completed: tasks.filter((task) => task.status === STATUS.DONE).length,
  }
}
