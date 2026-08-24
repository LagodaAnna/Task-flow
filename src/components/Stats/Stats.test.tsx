import { render, screen } from '@testing-library/react'
import Stats from './Stats'

describe('Stats', () => {
  it('renders all three stats with their labels and values', () => {
    render(<Stats />)

    expect(screen.getByText('Total tasks')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('In progress')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('Completed')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('exposes the section as a labeled landmark', () => {
    render(<Stats />)

    expect(
      screen.getByRole('region', { name: 'Task statistics' }),
    ).toBeInTheDocument()
  })
})
