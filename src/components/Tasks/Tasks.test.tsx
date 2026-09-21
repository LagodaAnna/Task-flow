import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tasks from './Tasks'
import { INITIAL_TASKS } from '../../hooks/useTasks'

const TASK_TITLES = [
  'Prepare presentation',
  'Review pull request',
  'Update dependencies',
  'Write release notes',
]

const BADGE_LABELS = ['High', 'Medium', 'Low', 'In progress', 'To do', 'Done']

function renderTasks() {
  return render(
    <Tasks
      tasks={INITIAL_TASKS}
      hasTasks={true}
      onAddTask={() => {}}
      onEditTask={() => {}}
      onDeleteTask={() => {}}
    />,
  )
}

describe('Tasks', () => {
  it('renders all sample tasks by title', () => {
    renderTasks()

    TASK_TITLES.forEach((title) => {
      expect(screen.getAllByText(title).length).toBeGreaterThan(0)
    })
  })

  it('renders each distinct badge label at least once', () => {
    renderTasks()

    BADGE_LABELS.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    })
  })

  it('provides an accessible actions control for every task', () => {
    renderTasks()

    TASK_TITLES.forEach((title) => {
      expect(
        screen.getAllByRole('button', { name: `Actions for ${title}` }).length,
      ).toBeGreaterThan(0)
    })
  })

  it('keeps only one actions menu open at a time', async () => {
    const user = userEvent.setup()
    renderTasks()

    const [firstActions] = screen.getAllByRole('button', {
      name: `Actions for ${TASK_TITLES[0]}`,
    })
    const [secondActions] = screen.getAllByRole('button', {
      name: `Actions for ${TASK_TITLES[1]}`,
    })

    await user.click(firstActions)
    const editButtonsForFirstTask = screen.getAllByRole('button', { name: 'Edit' })
    expect(editButtonsForFirstTask.length).toBeGreaterThan(0)

    await user.click(secondActions)
    const editButtonsForSecondTask = screen.getAllByRole('button', { name: 'Edit' })
    expect(editButtonsForSecondTask).toHaveLength(editButtonsForFirstTask.length)
  })

  it('closes the menu when its own trigger is clicked again', async () => {
    const user = userEvent.setup()
    renderTasks()

    const [trigger] = screen.getAllByRole('button', {
      name: `Actions for ${TASK_TITLES[0]}`,
    })

    await user.click(trigger)
    expect(screen.getAllByRole('button', { name: 'Edit' }).length).toBeGreaterThan(0)

    await user.click(trigger)
    expect(screen.queryAllByRole('button', { name: 'Edit' })).toHaveLength(0)
  })

  it('closes the menu when clicking outside of it', async () => {
    const user = userEvent.setup()
    renderTasks()

    const [trigger] = screen.getAllByRole('button', {
      name: `Actions for ${TASK_TITLES[0]}`,
    })

    await user.click(trigger)
    expect(screen.getAllByRole('button', { name: 'Edit' }).length).toBeGreaterThan(0)

    await user.click(document.body)
    expect(screen.queryAllByRole('button', { name: 'Edit' })).toHaveLength(0)
  })

  it('shows the empty state and no task list when there are no tasks at all', () => {
    render(
      <Tasks
        tasks={[]}
        hasTasks={false}
        onAddTask={() => {}}
        onEditTask={() => {}}
        onDeleteTask={() => {}}
      />,
    )

    expect(screen.getByRole('heading', { name: 'No tasks yet' })).toBeInTheDocument()
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
  })

  it('calls onAddTask when the empty state\'s "Add task" button is clicked', async () => {
    const user = userEvent.setup()
    const onAddTask = vi.fn()
    render(
      <Tasks
        tasks={[]}
        hasTasks={false}
        onAddTask={onAddTask}
        onEditTask={() => {}}
        onDeleteTask={() => {}}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Add task' }))

    expect(onAddTask).toHaveBeenCalledTimes(1)
  })

  it('shows the no-results state, not the empty state, when tasks exist but none are visible', () => {
    render(
      <Tasks
        tasks={[]}
        hasTasks={true}
        onAddTask={() => {}}
        onEditTask={() => {}}
        onDeleteTask={() => {}}
      />,
    )

    expect(screen.getByRole('heading', { name: 'No matching tasks' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'No tasks yet' })).not.toBeInTheDocument()
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
  })
})
