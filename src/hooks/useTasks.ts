import { PRIORITY, STATUS, type TaskData } from '../components/Tasks/taskTypes'

export const INITIAL_TASKS: TaskData[] = [
  {
    id: 'prepare-presentation',
    title: 'Prepare presentation',
    description: 'Presentation for client',
    dueDate: '24 Aug 2026',
    priority: PRIORITY.HIGH,
    status: STATUS.IN_PROGRESS,
  },
  {
    id: 'review-pull-request',
    title: 'Review pull request',
    description: 'Check auth flow changes',
    dueDate: '25 Aug 2026',
    priority: PRIORITY.MEDIUM,
    status: STATUS.TODO,
  },
  {
    id: 'update-dependencies',
    title: 'Update dependencies',
    description: 'Upgrade frontend packages',
    dueDate: '27 Aug 2026',
    priority: PRIORITY.LOW,
    status: STATUS.DONE,
  },
  {
    id: 'write-release-notes',
    title: 'Write release notes',
    description: 'Summarize v1 changes',
    dueDate: '29 Aug 2026',
    priority: PRIORITY.MEDIUM,
    status: STATUS.TODO,
  },
]

export function useTasks() {
  return { tasks: INITIAL_TASKS }
}
