import type { TaskData, Status, Priority } from '../taskTypes'

export const ALL_STATUSES = 'All statuses'
export const ALL_PRIORITIES = 'All priorities'

export const SORT = {
  NEWEST: 'Newest first',
  OLDEST: 'Oldest first',
} as const

export type StatusFilter = Status | typeof ALL_STATUSES
export type PriorityFilter = Priority | typeof ALL_PRIORITIES
export type SortOrder = (typeof SORT)[keyof typeof SORT]

export type TaskFiltersState = {
  search: string
  status: StatusFilter
  priority: PriorityFilter
  sort: SortOrder
}

export function getVisibleTasks(tasks: TaskData[], filters: TaskFiltersState): TaskData[] {
  const query = filters.search.trim().toLowerCase()

  const filtered = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(query)
    const matchesStatus = filters.status === ALL_STATUSES || task.status === filters.status
    const matchesPriority =
      filters.priority === ALL_PRIORITIES || task.priority === filters.priority
    return matchesSearch && matchesStatus && matchesPriority
  })

  return filtered.sort((a, b) => {
    const aTime = new Date(a.createdAt).getTime()
    const bTime = new Date(b.createdAt).getTime()
    return filters.sort === SORT.NEWEST ? bTime - aTime : aTime - bTime
  })
}
