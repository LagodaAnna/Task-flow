import { render, screen, within } from '@testing-library/react'
import Sidebar from './Sidebar'

describe('Sidebar', () => {
  it('renders the brand and all navigation items', () => {
    render(<Sidebar />)

    expect(screen.getByText('TaskFlow')).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(
      within(nav).getByRole('link', { name: 'Dashboard' }),
    ).toBeInTheDocument()
    expect(
      within(nav).getByRole('link', { name: 'All Tasks' }),
    ).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Today' })).toBeInTheDocument()
    expect(
      within(nav).getByRole('link', { name: 'Completed' }),
    ).toBeInTheDocument()
  })

  it('marks Dashboard as the current page', () => {
    render(<Sidebar />)

    expect(screen.getByRole('link', { name: 'Dashboard' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(screen.getByRole('link', { name: 'All Tasks' })).not.toHaveAttribute(
      'aria-current',
    )
    expect(screen.getByRole('link', { name: 'Today' })).not.toHaveAttribute(
      'aria-current',
    )
    expect(screen.getByRole('link', { name: 'Completed' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('renders the signed-in user info', () => {
    render(<Sidebar />)

    expect(screen.getByText('Adam Smith')).toBeInTheDocument()
    expect(screen.getByText('Personal workspace')).toBeInTheDocument()
  })
})
