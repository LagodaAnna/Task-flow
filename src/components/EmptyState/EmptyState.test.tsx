import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EmptyState from './EmptyState'

describe('EmptyState', () => {
  it('renders the heading and body copy', () => {
    render(<EmptyState onAddTask={() => {}} />)

    expect(
      screen.getByRole('heading', { name: 'No tasks yet' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Create your first task to get started.'),
    ).toBeInTheDocument()
  })

  it('calls onAddTask when the "Add task" button is clicked', async () => {
    const user = userEvent.setup()
    const onAddTask = vi.fn()
    render(<EmptyState onAddTask={onAddTask} />)

    await user.click(screen.getByRole('button', { name: 'Add task' }))

    expect(onAddTask).toHaveBeenCalledTimes(1)
  })
})
