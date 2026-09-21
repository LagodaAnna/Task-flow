import { render, screen, within } from '@testing-library/react'
import Sidebar from './Sidebar'

describe('Sidebar', () => {
  it('renders the brand and all navigation items', () => {
    render(<Sidebar />)

    expect(screen.getByText('TaskFlow')).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(nav).getByRole('link', { name: 'Dashboard' })).toBeInTheDocument()
    expect(within(nav).getByText('All Tasks')).toBeInTheDocument()
    expect(within(nav).getByText('Today')).toBeInTheDocument()
    expect(within(nav).getByText('Completed')).toBeInTheDocument()
  })

  it('marks Dashboard as the only clickable, current-page link', () => {
    render(<Sidebar />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(nav).getAllByRole('link')).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Dashboard' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('shows a "Coming soon" label on the disabled navigation items', () => {
    render(<Sidebar />)

    expect(screen.getAllByText('Coming soon')).toHaveLength(3)
  })

  it('renders the signed-in user info', () => {
    render(<Sidebar />)

    expect(screen.getByText('Adam Smith')).toBeInTheDocument()
    expect(screen.getByText('Personal workspace')).toBeInTheDocument()
  })
})
