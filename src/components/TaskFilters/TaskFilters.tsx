import type { ChangeEvent, FormEvent } from 'react'
import SearchIcon from '../Icon/SearchIcon'
import FilterSelect from '../FilterSelect/FilterSelect'
import { PRIORITY, STATUS } from '../Tasks/taskTypes'
import {
  ALL_STATUSES,
  ALL_PRIORITIES,
  SORT,
  type StatusFilter,
  type PriorityFilter,
  type SortOrder,
} from '../Tasks/utils/getVisibleTasks'

const STATUS_OPTIONS: StatusFilter[] = [ALL_STATUSES, ...Object.values(STATUS)]
const PRIORITY_OPTIONS: PriorityFilter[] = [ALL_PRIORITIES, ...Object.values(PRIORITY)]
const SORT_OPTIONS: SortOrder[] = Object.values(SORT)

type TaskFiltersProps = {
  search: string
  onSearchChange: (search: string) => void
  status: StatusFilter
  onStatusChange: (status: StatusFilter) => void
  priority: PriorityFilter
  onPriorityChange: (priority: PriorityFilter) => void
  sort: SortOrder
  onSortChange: (sort: SortOrder) => void
}

function TaskFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
  priority,
  onPriorityChange,
  sort,
  onSortChange,
}: TaskFiltersProps) {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    onSearchChange(event.target.value)
  }

  return (
    <search aria-label="Search and filter tasks">
      <form
        className="flex flex-col gap-3 lg:flex-row lg:items-center"
        onSubmit={handleSubmit}
      >
        <div className="relative lg:flex-1">
          <label htmlFor="search-tasks" className="sr-only">
            Search tasks
          </label>
          <SearchIcon
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted"
          />
          <input
            id="search-tasks"
            name="search"
            type="search"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search tasks..."
            className="h-11 w-full rounded-md border border-border bg-surface pl-10 pr-3 text-sm text-text placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
        </div>

        <div className="grid grid-cols-3 gap-3 lg:flex">
          <FilterSelect<StatusFilter>
            id="status-filter"
            name="status"
            label="Filter by status"
            options={STATUS_OPTIONS}
            value={status}
            onChange={onStatusChange}
          />
          <FilterSelect<PriorityFilter>
            id="priority-filter"
            name="priority"
            label="Filter by priority"
            options={PRIORITY_OPTIONS}
            value={priority}
            onChange={onPriorityChange}
          />
          <FilterSelect<SortOrder>
            id="sort-filter"
            name="sort"
            label="Sort tasks"
            options={SORT_OPTIONS}
            value={sort}
            onChange={onSortChange}
          />
        </div>
      </form>
    </search>
  )
}

export default TaskFilters
