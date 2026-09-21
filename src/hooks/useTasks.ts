import { useState } from 'react'
import * as tasksApi from '../services/tasksApi'
import type { TaskData } from '../components/Tasks/taskTypes'

type TasksLoadState = {
  tasks: TaskData[]
  loadError: boolean
}

function loadInitialState(): TasksLoadState {
  try {
    return { tasks: tasksApi.getTasks(), loadError: false }
  } catch {
    return { tasks: [], loadError: true }
  }
}

export function useTasks() {
  const [state, setState] = useState<TasksLoadState>(loadInitialState)

  function addTask(task: TaskData) {
    setState((current) => ({ ...current, tasks: [task, ...current.tasks] }))
    try {
      tasksApi.createTask(task)
    } catch (error) {
      console.error(error)
    }
  }

  function updateTask(task: TaskData) {
    setState((current) => ({
      ...current,
      tasks: current.tasks.map((existing) => (existing.id === task.id ? task : existing)),
    }))
    try {
      tasksApi.updateTask(task)
    } catch (error) {
      console.error(error)
    }
  }

  function deleteTask(taskId: string) {
    setState((current) => ({
      ...current,
      tasks: current.tasks.filter((task) => task.id !== taskId),
    }))
    try {
      tasksApi.deleteTask(taskId)
    } catch (error) {
      console.error(error)
    }
  }

  return { tasks: state.tasks, loadError: state.loadError, addTask, updateTask, deleteTask }
}
