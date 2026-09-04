import { render, screen } from '@testing-library/react'
import Tasks from './Tasks'
import { INITIAL_TASKS } from '../../hooks/useTasks'

const TASK_TITLES = [
  'Prepare presentation',
  'Review pull request',
  'Update dependencies',
  'Write release notes',
]

const BADGE_LABELS = ['High', 'Medium', 'Low', 'In progress', 'To do', 'Done']

describe('Tasks', () => {
  it('renders all sample tasks by title', () => {
    render(<Tasks tasks={INITIAL_TASKS} />)

    TASK_TITLES.forEach((title) => {
      expect(screen.getAllByText(title).length).toBeGreaterThan(0)
    })
  })

  it('renders each distinct badge label at least once', () => {
    render(<Tasks tasks={INITIAL_TASKS} />)

    BADGE_LABELS.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    })
  })

  it('provides an accessible actions control for every task', () => {
    render(<Tasks tasks={INITIAL_TASKS} />)

    TASK_TITLES.forEach((title) => {
      expect(
        screen.getAllByRole('button', { name: `Actions for ${title}` }).length,
      ).toBeGreaterThan(0)
    })
  })
})
