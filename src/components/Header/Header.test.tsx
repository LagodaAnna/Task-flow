import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders the page heading', () => {
    render(<Header />)

    expect(
      screen.getByRole('heading', { name: 'My Tasks', level: 1 }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Header />)

    expect(
      screen.getByText('Manage your work and stay on track.'),
    ).toBeInTheDocument()
  })

  it('exposes an accessible "Add task" action', () => {
    render(<Header />)

    const addTaskButtons = screen.getAllByRole('button', { name: 'Add task' })
    expect(addTaskButtons.length).toBeGreaterThan(0)
  })

  it('exposes an accessible menu toggle', () => {
    render(<Header />)

    expect(
      screen.getByRole('button', { name: 'Open menu' }),
    ).toBeInTheDocument()
  })
})
