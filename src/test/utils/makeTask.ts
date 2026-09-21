import type { TaskData } from '../../components/Tasks/taskTypes'

export function makeTask(overrides: Partial<TaskData>): TaskData {
  return {
    id: 'id',
    title: 'title',
    description: '',
    dueDate: '',
    priority: 'Low',
    status: 'To do',
    createdAt: '2026-01-01T00:00:00.000Z',
    ...overrides,
  }
}
