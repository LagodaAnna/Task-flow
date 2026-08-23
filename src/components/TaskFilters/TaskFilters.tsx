import SearchIcon from '../Icon/SearchIcon'
import FilterSelect from '../FilterSelect/FilterSelect'

const STATUS_OPTIONS = ['All statuses', 'To do', 'In progress', 'Completed']
const PRIORITY_OPTIONS = ['All priorities', 'Low', 'Medium', 'High']
const SORT_OPTIONS = ['Newest first', 'Oldest first']

function TaskFilters() {
  return (
    <search aria-label="Search and filter tasks">
      <form
        className="flex flex-col gap-3 lg:flex-row lg:items-center"
        onSubmit={(event) => event.preventDefault()}
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
            placeholder="Search tasks..."
            className="h-11 w-full rounded-md border border-border bg-surface pl-10 pr-3 text-sm text-text placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
        </div>

        <div className="grid grid-cols-3 gap-3 lg:flex">
          <FilterSelect
            id="status-filter"
            name="status"
            label="Filter by status"
            options={STATUS_OPTIONS}
          />
          <FilterSelect
            id="priority-filter"
            name="priority"
            label="Filter by priority"
            options={PRIORITY_OPTIONS}
          />
          <FilterSelect id="sort-filter" name="sort" label="Sort tasks" options={SORT_OPTIONS} />
        </div>
      </form>
    </search>
  )
}

export default TaskFilters
