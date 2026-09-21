import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaskModal from './TaskModal'
import type { TaskData } from '../Tasks/taskTypes'

const EXISTING_TASK: TaskData = {
  id: 'existing-task',
  title: 'Review pull request',
  description: 'Check auth flow changes',
  dueDate: '25 Aug 2026',
  priority: 'Medium',
  status: 'To do',
  createdAt: '2026-08-19T09:00:00.000Z',
}

describe('TaskModal', () => {
  it('shows a validation error and does not create a task when Title is empty', async () => {
    const user = userEvent.setup()
    const onCreateTask = vi.fn()
    render(<TaskModal onClose={() => {}} onCreateTask={onCreateTask} onUpdateTask={vi.fn()} />)

    await user.click(screen.getByRole('button', { name: 'Create task' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Title is required')
    expect(onCreateTask).not.toHaveBeenCalled()
  })

  it('creates a task and closes the modal on a valid submit', async () => {
    const user = userEvent.setup()
    const onCreateTask = vi.fn()
    const onClose = vi.fn()
    render(<TaskModal onClose={onClose} onCreateTask={onCreateTask} onUpdateTask={vi.fn()} />)

    await user.type(screen.getByLabelText(/title/i), 'Write tests')
    await user.click(screen.getByRole('button', { name: 'Create task' }))

    expect(onCreateTask).toHaveBeenCalledTimes(1)
    expect(onCreateTask).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Write tests',
        status: 'To do',
        priority: 'Medium',
      }),
    )
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes without creating a task when Cancel is clicked', async () => {
    const user = userEvent.setup()
    const onCreateTask = vi.fn()
    const onClose = vi.fn()
    render(<TaskModal onClose={onClose} onCreateTask={onCreateTask} onUpdateTask={vi.fn()} />)

    await user.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(onCreateTask).not.toHaveBeenCalled()
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('prefills the form and updates the task when editing', async () => {
    const user = userEvent.setup()
    const onUpdateTask = vi.fn()
    const onClose = vi.fn()
    render(
      <TaskModal
        task={EXISTING_TASK}
        onClose={onClose}
        onCreateTask={vi.fn()}
        onUpdateTask={onUpdateTask}
      />,
    )

    expect(screen.getByRole('heading', { name: 'Edit task' })).toBeInTheDocument()
    const titleInput = screen.getByLabelText(/title/i)
    expect(titleInput).toHaveValue(EXISTING_TASK.title)

    await user.clear(titleInput)
    await user.type(titleInput, 'Review pull request v2')
    await user.click(screen.getByRole('button', { name: 'Save changes' }))

    expect(onUpdateTask).toHaveBeenCalledTimes(1)
    expect(onUpdateTask).toHaveBeenCalledWith(
      expect.objectContaining({
        id: EXISTING_TASK.id,
        title: 'Review pull request v2',
      }),
    )
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
