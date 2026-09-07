import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'

describe('Header', () => {
  it('renders the page heading', () => {
    render(<Header onAddTask={() => {}} />)

    expect(screen.getByRole('heading', { name: 'My Tasks', level: 1 })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Header onAddTask={() => {}} />)

    expect(screen.getByText('Manage your work and stay on track.')).toBeInTheDocument()
  })

  it('exposes an accessible "Add task" action', () => {
    render(<Header onAddTask={() => {}} />)

    const addTaskButtons = screen.getAllByRole('button', { name: 'Add task' })
    expect(addTaskButtons.length).toBeGreaterThan(0)
  })

  it('calls onAddTask when an "Add task" button is clicked', async () => {
    const user = userEvent.setup()
    const onAddTask = vi.fn()
    render(<Header onAddTask={onAddTask} />)

    const [firstAddTaskButton] = screen.getAllByRole('button', { name: 'Add task' })
    await user.click(firstAddTaskButton)

    expect(onAddTask).toHaveBeenCalledTimes(1)
  })

  it('exposes an accessible menu toggle', () => {
    render(<Header onAddTask={() => {}} />)

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
