import { renderHook, act } from '@testing-library/react'
import { useTasks } from './useTasks'
import * as tasksApi from '../services/tasksApi'
import { makeTask } from '../test/utils/makeTask'

const STORAGE_KEY = 'taskflow:tasks'

describe('useTasks', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('starts with an empty array when nothing is stored', () => {
    const { result } = renderHook(() => useTasks())

    expect(result.current.tasks).toEqual([])
    expect(result.current.loadError).toBe(false)
  })

  it('loads previously-stored tasks', () => {
    const storedTask = makeTask({ id: 'stored-task' })
    tasksApi.createTask(storedTask)

    const { result } = renderHook(() => useTasks())

    expect(result.current.tasks).toEqual([storedTask])
  })

  it('surfaces a load error when stored data is corrupt', () => {
    localStorage.setItem(STORAGE_KEY, 'not json')

    const { result } = renderHook(() => useTasks())

    expect(result.current.loadError).toBe(true)
    expect(result.current.tasks).toEqual([])
  })

  it('adds a new task to the front of the list and persists it', () => {
    const { result } = renderHook(() => useTasks())
    const newTask = makeTask({ id: 'new-task' })

    act(() => {
      result.current.addTask(newTask)
    })

    expect(result.current.tasks[0]).toEqual(newTask)
    expect(tasksApi.getTasks()).toEqual([newTask])
  })

  it('updates an existing task in place and persists it', () => {
    const existingTask = makeTask({ id: 'existing-task', title: 'Original' })
    tasksApi.createTask(existingTask)
    const { result } = renderHook(() => useTasks())
    const updatedTask = { ...existingTask, title: 'Updated' }

    act(() => {
      result.current.updateTask(updatedTask)
    })

    expect(result.current.tasks).toEqual([updatedTask])
    expect(tasksApi.getTasks()).toEqual([updatedTask])
  })

  it('deletes a task and persists it', () => {
    const existingTask = makeTask({ id: 'existing-task' })
    tasksApi.createTask(existingTask)
    const { result } = renderHook(() => useTasks())

    act(() => {
      result.current.deleteTask(existingTask.id)
    })

    expect(result.current.tasks).toEqual([])
    expect(tasksApi.getTasks()).toEqual([])
  })
})
