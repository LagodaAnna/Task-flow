import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaskFilters from './TaskFilters'
import { ALL_STATUSES, ALL_PRIORITIES, SORT } from '../Tasks/utils/getVisibleTasks'

function renderTaskFilters() {
  const props: Parameters<typeof TaskFilters>[0] = {
    search: '',
    onSearchChange: vi.fn(),
    status: ALL_STATUSES,
    onStatusChange: vi.fn(),
    priority: ALL_PRIORITIES,
    onPriorityChange: vi.fn(),
    sort: SORT.NEWEST,
    onSortChange: vi.fn(),
  }
  render(<TaskFilters {...props} />)
  return props
}

describe('TaskFilters', () => {
  it('renders an accessible search input', () => {
    renderTaskFilters()

    const search = screen.getByRole('searchbox', { name: /search tasks/i })
    expect(search).toBeInTheDocument()
    expect(search).toHaveAttribute('placeholder', 'Search tasks...')
  })

  it('renders three accessible, labeled filters with their full option sets', () => {
    renderTaskFilters()

    const statusFilter = screen.getByRole('combobox', {
      name: 'Filter by status',
    })
    expect(
      within(statusFilter)
        .getAllByRole('option')
        .map((option) => option.textContent),
    ).toEqual(['All statuses', 'To do', 'In progress', 'Done'])

    const priorityFilter = screen.getByRole('combobox', {
      name: 'Filter by priority',
    })
    expect(
      within(priorityFilter)
        .getAllByRole('option')
        .map((option) => option.textContent),
    ).toEqual(['All priorities', 'Low', 'Medium', 'High'])

    const sortFilter = screen.getByRole('combobox', { name: 'Sort tasks' })
    expect(
      within(sortFilter)
        .getAllByRole('option')
        .map((option) => option.textContent),
    ).toEqual(['Newest first', 'Oldest first'])
  })

  it('calls onSearchChange as the user types', async () => {
    const user = userEvent.setup()
    const props = renderTaskFilters()

    await user.type(screen.getByRole('searchbox', { name: /search tasks/i }), 'a')

    expect(props.onSearchChange).toHaveBeenCalledWith('a')
  })

  it('calls onStatusChange when a status is selected', async () => {
    const user = userEvent.setup()
    const props = renderTaskFilters()

    await user.selectOptions(screen.getByRole('combobox', { name: 'Filter by status' }), 'Done')

    expect(props.onStatusChange).toHaveBeenCalledWith('Done')
  })

  it('calls onPriorityChange when a priority is selected', async () => {
    const user = userEvent.setup()
    const props = renderTaskFilters()

    await user.selectOptions(
      screen.getByRole('combobox', { name: 'Filter by priority' }),
      'High',
    )

    expect(props.onPriorityChange).toHaveBeenCalledWith('High')
  })

  it('calls onSortChange when a sort option is selected', async () => {
    const user = userEvent.setup()
    const props = renderTaskFilters()

    await user.selectOptions(screen.getByRole('combobox', { name: 'Sort tasks' }), 'Oldest first')

    expect(props.onSortChange).toHaveBeenCalledWith('Oldest first')
  })
})
