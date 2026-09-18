import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaskActions from './TaskActions'

describe('TaskActions', () => {
  it('calls onToggle when the trigger is clicked', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(
      <TaskActions
        taskTitle="Write release notes"
        isOpen={false}
        onToggle={onToggle}
        onEdit={() => {}}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Actions for Write release notes' }))

    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('shows the Edit button only when isOpen is true', () => {
    const { rerender } = render(
      <TaskActions
        taskTitle="Write release notes"
        isOpen={false}
        onToggle={() => {}}
        onEdit={() => {}}
      />,
    )
    expect(screen.queryByRole('button', { name: 'Edit' })).not.toBeInTheDocument()

    rerender(
      <TaskActions
        taskTitle="Write release notes"
        isOpen={true}
        onToggle={() => {}}
        onEdit={() => {}}
      />,
    )
    expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument()
  })

  it('calls onEdit and onToggle when Edit is clicked', async () => {
    const user = userEvent.setup()
    const onEdit = vi.fn()
    const onToggle = vi.fn()
    render(
      <TaskActions
        taskTitle="Write release notes"
        isOpen={true}
        onToggle={onToggle}
        onEdit={onEdit}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Edit' }))

    expect(onEdit).toHaveBeenCalledTimes(1)
    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
