import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DeleteTaskDialog from './DeleteTaskDialog'

describe('DeleteTaskDialog', () => {
  it('shows the task title in the confirmation message', () => {
    render(
      <DeleteTaskDialog taskTitle="Write release notes" onCancel={() => {}} onConfirm={() => {}} />,
    )

    expect(screen.getByRole('heading', { name: 'Delete task' })).toBeInTheDocument()
    expect(screen.getByText(/write release notes/i)).toBeInTheDocument()
  })

  it('calls onCancel and not onConfirm when Cancel is clicked', async () => {
    const user = userEvent.setup()
    const onCancel = vi.fn()
    const onConfirm = vi.fn()
    render(
      <DeleteTaskDialog taskTitle="Write release notes" onCancel={onCancel} onConfirm={onConfirm} />,
    )

    await user.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(onCancel).toHaveBeenCalledTimes(1)
    expect(onConfirm).not.toHaveBeenCalled()
  })

  it('calls onConfirm and not onCancel when Delete task is clicked', async () => {
    const user = userEvent.setup()
    const onCancel = vi.fn()
    const onConfirm = vi.fn()
    render(
      <DeleteTaskDialog taskTitle="Write release notes" onCancel={onCancel} onConfirm={onConfirm} />,
    )

    await user.click(screen.getByRole('button', { name: 'Delete task' }))

    expect(onConfirm).toHaveBeenCalledTimes(1)
    expect(onCancel).not.toHaveBeenCalled()
  })
})
