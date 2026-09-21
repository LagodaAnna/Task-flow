import { getTaskStats } from './getTaskStats'
import type { TaskData } from '../../Tasks/taskTypes'

function makeTask(overrides: Partial<TaskData>): TaskData {
  return {
    id: 'id',
    title: 'title',
    description: '',
    dueDate: '',
    priority: 'Low',
    status: 'To do',
    createdAt: '2026-01-01T00:00:00.000Z',
    ...overrides,
  }
}

describe('getTaskStats', () => {
  it('counts total, in-progress, and completed tasks', () => {
    const tasks = [
      makeTask({ id: '1', status: 'To do' }),
      makeTask({ id: '2', status: 'In progress' }),
      makeTask({ id: '3', status: 'In progress' }),
      makeTask({ id: '4', status: 'Done' }),
    ]

    expect(getTaskStats(tasks)).toEqual({ total: 4, inProgress: 2, completed: 1 })
  })

  it('returns zeros for an empty task list', () => {
    expect(getTaskStats([])).toEqual({ total: 0, inProgress: 0, completed: 0 })
  })
})
