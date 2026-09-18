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
        onDelete={() => {}}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Actions for Write release notes' }))

    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('shows the Edit and Delete buttons only when isOpen is true, Delete below Edit', () => {
    const { rerender } = render(
      <TaskActions
        taskTitle="Write release notes"
        isOpen={false}
        onToggle={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />,
    )
    expect(screen.queryByRole('button', { name: 'Edit' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Delete' })).not.toBeInTheDocument()

    rerender(
      <TaskActions
        taskTitle="Write release notes"
        isOpen={true}
        onToggle={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />,
    )
    const menuButtons = screen.getAllByRole('button', { name: /^(Edit|Delete)$/ })
    expect(menuButtons.map((button) => button.textContent)).toEqual(['Edit', 'Delete'])
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
        onDelete={() => {}}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Edit' }))

    expect(onEdit).toHaveBeenCalledTimes(1)
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('calls onDelete and onToggle when Delete is clicked', async () => {
    const user = userEvent.setup()
    const onDelete = vi.fn()
    const onToggle = vi.fn()
    render(
      <TaskActions
        taskTitle="Write release notes"
        isOpen={true}
        onToggle={onToggle}
        onEdit={() => {}}
        onDelete={onDelete}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Delete' }))

    expect(onDelete).toHaveBeenCalledTimes(1)
    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
