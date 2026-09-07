import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from './Modal'

describe('Modal', () => {
  it('shows its title and content', () => {
    render(
      <Modal onClose={() => {}} title="Create new task">
        <p>Form content</p>
      </Modal>,
    )

    expect(screen.getByRole('heading', { name: 'Create new task' })).toBeInTheDocument()
    expect(screen.getByText('Form content')).toBeVisible()
  })

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(
      <Modal onClose={onClose} title="Create new task">
        <p>Form content</p>
      </Modal>,
    )

    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
