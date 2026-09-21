import { render, screen } from '@testing-library/react'
import NoResultsState from './NoResultsState'

describe('NoResultsState', () => {
  it('renders the heading and body copy', () => {
    render(<NoResultsState />)

    expect(screen.getByRole('heading', { name: 'No matching tasks' })).toBeInTheDocument()
    expect(screen.getByText('Try adjusting your search or filters.')).toBeInTheDocument()
  })
})
