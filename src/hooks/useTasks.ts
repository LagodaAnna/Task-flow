import { useState } from 'react'
import { PRIORITY, STATUS, type TaskData } from '../components/Tasks/taskTypes'

export const INITIAL_TASKS: TaskData[] = [
  {
    id: 'prepare-presentation',
    title: 'Prepare presentation',
    description: 'Presentation for client',
    dueDate: '24 Aug 2026',
    priority: PRIORITY.HIGH,
    status: STATUS.IN_PROGRESS,
    createdAt: '2026-08-20T09:00:00.000Z',
  },
  {
    id: 'review-pull-request',
    title: 'Review pull request',
    description: 'Check auth flow changes',
    dueDate: '25 Aug 2026',
    priority: PRIORITY.MEDIUM,
    status: STATUS.TODO,
    createdAt: '2026-08-19T09:00:00.000Z',
  },
  {
    id: 'update-dependencies',
    title: 'Update dependencies',
    description: 'Upgrade frontend packages',
    dueDate: '27 Aug 2026',
    priority: PRIORITY.LOW,
    status: STATUS.DONE,
    createdAt: '2026-08-18T09:00:00.000Z',
  },
  {
    id: 'write-release-notes',
    title: 'Write release notes',
    description: 'Summarize v1 changes',
    dueDate: '29 Aug 2026',
    priority: PRIORITY.MEDIUM,
    status: STATUS.TODO,
    createdAt: '2026-08-17T09:00:00.000Z',
  },
]

export function useTasks() {
  const [tasks, setTasks] = useState<TaskData[]>(INITIAL_TASKS)

  function addTask(task: TaskData) {
    setTasks((current) => [task, ...current])
  }

  function updateTask(task: TaskData) {
    setTasks((current) => current.map((existing) => (existing.id === task.id ? task : existing)))
  }

  function deleteTask(taskId: string) {
    setTasks((current) => current.filter((task) => task.id !== taskId))
  }

  return { tasks, addTask, updateTask, deleteTask }
}
