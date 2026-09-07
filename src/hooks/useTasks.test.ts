import { renderHook, act } from '@testing-library/react'
import { useTasks, INITIAL_TASKS } from './useTasks'
import type { TaskData } from '../components/Tasks/taskTypes'

const NEW_TASK: TaskData = {
  id: 'new-task',
  title: 'New task',
  description: '',
  dueDate: '',
  priority: 'Low',
  status: 'To do',
}

describe('useTasks', () => {
  it('starts with the initial sample tasks', () => {
    const { result } = renderHook(() => useTasks())

    expect(result.current.tasks).toEqual(INITIAL_TASKS)
  })

  it('adds a new task to the front of the list', () => {
    const { result } = renderHook(() => useTasks())

    act(() => {
      result.current.addTask(NEW_TASK)
    })

    expect(result.current.tasks[0]).toEqual(NEW_TASK)
    expect(result.current.tasks).toHaveLength(INITIAL_TASKS.length + 1)
  })

  it('updates an existing task in place', () => {
    const { result } = renderHook(() => useTasks())
    const updatedTask: TaskData = {
      ...INITIAL_TASKS[0],
      title: 'Updated title',
    }

    act(() => {
      result.current.updateTask(updatedTask)
    })

    expect(result.current.tasks).toHaveLength(INITIAL_TASKS.length)
    expect(
      result.current.tasks.find((task) => task.id === updatedTask.id),
    ).toEqual(updatedTask)
  })
})
