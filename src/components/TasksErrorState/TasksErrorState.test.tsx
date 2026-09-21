import { render, screen } from '@testing-library/react'
import TasksErrorState from './TasksErrorState'

describe('TasksErrorState', () => {
  it('renders the heading and body copy', () => {
    render(<TasksErrorState />)

    expect(
      screen.getByRole('heading', { name: "Couldn't load your tasks" }),
    ).toBeInTheDocument()
    expect(screen.getByText('Something went wrong. Please try again.')).toBeInTheDocument()
  })

  it('renders an accessible "Try again" button', () => {
    render(<TasksErrorState />)

    expect(screen.getByRole('button', { name: 'Try again' })).toBeInTheDocument()
  })
})
