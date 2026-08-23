import { render, screen } from '@testing-library/react'
import EmptyState from './EmptyState'

describe('EmptyState', () => {
  it('renders the heading and body copy', () => {
    render(<EmptyState />)

    expect(screen.getByRole('heading', { name: 'No tasks yet' })).toBeInTheDocument()
    expect(screen.getByText('Create your first task to get started.')).toBeInTheDocument()
  })

  it('renders an accessible "Add task" call to action', () => {
    render(<EmptyState />)

    expect(screen.getByRole('button', { name: 'Add task' })).toBeInTheDocument()
  })
})
