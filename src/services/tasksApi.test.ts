import { getTasks, createTask, updateTask, deleteTask } from './tasksApi'
import { makeTask } from '../test/utils/makeTask'

const STORAGE_KEY = 'taskflow:tasks'

describe('tasksApi', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns an empty array when nothing is stored', () => {
    expect(getTasks()).toEqual([])
  })

  it('throws when stored data is not valid JSON', () => {
    localStorage.setItem(STORAGE_KEY, 'not json')

    expect(() => getTasks()).toThrow()
  })

  it('creates a task at the front of the list and persists it', () => {
    createTask(makeTask({ id: '1' }))
    createTask(makeTask({ id: '2' }))

    expect(getTasks().map((task) => task.id)).toEqual(['2', '1'])
  })

  it('updates an existing task in place', () => {
    createTask(makeTask({ id: '1', title: 'Original' }))

    updateTask(makeTask({ id: '1', title: 'Updated' }))

    expect(getTasks()).toEqual([makeTask({ id: '1', title: 'Updated' })])
  })

  it('deletes a task', () => {
    createTask(makeTask({ id: '1' }))
    createTask(makeTask({ id: '2' }))

    deleteTask('1')

    expect(getTasks().map((task) => task.id)).toEqual(['2'])
  })
})
