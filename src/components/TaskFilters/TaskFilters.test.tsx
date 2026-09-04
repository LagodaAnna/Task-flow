import { render, screen, within } from '@testing-library/react'
import TaskFilters from './TaskFilters'

describe('TaskFilters', () => {
  it('renders an accessible search input', () => {
    render(<TaskFilters />)

    const search = screen.getByRole('searchbox', { name: /search tasks/i })
    expect(search).toBeInTheDocument()
    expect(search).toHaveAttribute('placeholder', 'Search tasks...')
  })

  it('renders three accessible, labeled filters with their full option sets', () => {
    render(<TaskFilters />)

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
})
