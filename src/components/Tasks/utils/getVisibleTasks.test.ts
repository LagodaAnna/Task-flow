import { getVisibleTasks, ALL_STATUSES, ALL_PRIORITIES, SORT } from './getVisibleTasks'
import type { TaskFiltersState } from './getVisibleTasks'
import type { TaskData } from '../taskTypes'

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

const baseFilters: TaskFiltersState = {
  search: '',
  status: ALL_STATUSES,
  priority: ALL_PRIORITIES,
  sort: SORT.NEWEST,
}

describe('getVisibleTasks', () => {
  it('filters tasks by title, case-insensitively', () => {
    const tasks = [
      makeTask({ id: '1', title: 'Write release notes' }),
      makeTask({ id: '2', title: 'Review pull request' }),
    ]

    const result = getVisibleTasks(tasks, { ...baseFilters, search: 'REVIEW' })

    expect(result.map((task) => task.id)).toEqual(['2'])
  })

  it('ignores leading/trailing whitespace in the search query', () => {
    const tasks = [makeTask({ id: '1', title: 'Write release notes' })]

    const result = getVisibleTasks(tasks, { ...baseFilters, search: '  release  ' })

    expect(result.map((task) => task.id)).toEqual(['1'])
  })

  it('filters by status', () => {
    const tasks = [
      makeTask({ id: '1', status: 'To do' }),
      makeTask({ id: '2', status: 'Done' }),
    ]

    const result = getVisibleTasks(tasks, { ...baseFilters, status: 'Done' })

    expect(result.map((task) => task.id)).toEqual(['2'])
  })

  it('shows tasks with any status when "All statuses" is selected', () => {
    const tasks = [
      makeTask({ id: '1', status: 'To do' }),
      makeTask({ id: '2', status: 'Done' }),
    ]

    const result = getVisibleTasks(tasks, { ...baseFilters, status: ALL_STATUSES })

    expect(result.map((task) => task.id)).toEqual(['1', '2'])
  })

  it('filters by priority', () => {
    const tasks = [
      makeTask({ id: '1', priority: 'Low' }),
      makeTask({ id: '2', priority: 'High' }),
    ]

    const result = getVisibleTasks(tasks, { ...baseFilters, priority: 'High' })

    expect(result.map((task) => task.id)).toEqual(['2'])
  })

  it('applies status and priority filters together', () => {
    const tasks = [
      makeTask({ id: '1', status: 'Done', priority: 'High' }),
      makeTask({ id: '2', status: 'Done', priority: 'Low' }),
      makeTask({ id: '3', status: 'To do', priority: 'High' }),
    ]

    const result = getVisibleTasks(tasks, { ...baseFilters, status: 'Done', priority: 'High' })

    expect(result.map((task) => task.id)).toEqual(['1'])
  })

  it('sorts newest first', () => {
    const tasks = [
      makeTask({ id: '1', createdAt: '2026-01-01T00:00:00.000Z' }),
      makeTask({ id: '2', createdAt: '2026-03-01T00:00:00.000Z' }),
      makeTask({ id: '3', createdAt: '2026-02-01T00:00:00.000Z' }),
    ]

    const result = getVisibleTasks(tasks, { ...baseFilters, sort: SORT.NEWEST })

    expect(result.map((task) => task.id)).toEqual(['2', '3', '1'])
  })

  it('sorts oldest first', () => {
    const tasks = [
      makeTask({ id: '1', createdAt: '2026-01-01T00:00:00.000Z' }),
      makeTask({ id: '2', createdAt: '2026-03-01T00:00:00.000Z' }),
      makeTask({ id: '3', createdAt: '2026-02-01T00:00:00.000Z' }),
    ]

    const result = getVisibleTasks(tasks, { ...baseFilters, sort: SORT.OLDEST })

    expect(result.map((task) => task.id)).toEqual(['1', '3', '2'])
  })

  it('combines search, status, and priority filters', () => {
    const tasks = [
      makeTask({ id: '1', title: 'Review pull request', status: 'To do', priority: 'High' }),
      makeTask({ id: '2', title: 'Review design doc', status: 'Done', priority: 'High' }),
      makeTask({ id: '3', title: 'Write release notes', status: 'To do', priority: 'High' }),
    ]

    const result = getVisibleTasks(tasks, {
      ...baseFilters,
      search: 'review',
      status: 'To do',
      priority: 'High',
    })

    expect(result.map((task) => task.id)).toEqual(['1'])
  })

  it('does not mutate the original tasks array', () => {
    const tasks = [
      makeTask({ id: '1', createdAt: '2026-01-01T00:00:00.000Z' }),
      makeTask({ id: '2', createdAt: '2026-02-01T00:00:00.000Z' }),
    ]
    const original = [...tasks]

    getVisibleTasks(tasks, { ...baseFilters, sort: SORT.OLDEST })

    expect(tasks).toEqual(original)
    expect(tasks.map((task) => task.id)).toEqual(['1', '2'])
  })
})
