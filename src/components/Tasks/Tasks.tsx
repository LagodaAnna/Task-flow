import TaskTable from '../TaskTable/TaskTable'
import TaskList from '../TaskList/TaskList'
import type { TaskData } from './taskTypes'

const TASKS: TaskData[] = [
  {
    id: 'prepare-presentation',
    title: 'Prepare presentation',
    description: 'Presentation for client',
    dueDate: '24 Aug 2026',
    priority: 'High',
    status: 'In progress',
  },
  {
    id: 'review-pull-request',
    title: 'Review pull request',
    description: 'Check auth flow changes',
    dueDate: '25 Aug 2026',
    priority: 'Medium',
    status: 'To do',
  },
  {
    id: 'update-dependencies',
    title: 'Update dependencies',
    description: 'Upgrade frontend packages',
    dueDate: '27 Aug 2026',
    priority: 'Low',
    status: 'Done',
  },
  {
    id: 'write-release-notes',
    title: 'Write release notes',
    description: 'Summarize v1 changes',
    dueDate: '29 Aug 2026',
    priority: 'Medium',
    status: 'To do',
  },
]

function Tasks() {
  return (
    <>
      <TaskTable tasks={TASKS} />
      <TaskList tasks={TASKS} />
    </>
  )
}

export default Tasks
