import TaskTable from '../TaskTable/TaskTable'
import TaskList from '../TaskList/TaskList'
import type { TaskData } from './taskTypes'

type TasksProps = {
  tasks: TaskData[]
}

function Tasks({ tasks }: TasksProps) {
  return (
    <>
      <TaskTable tasks={tasks} />
      <TaskList tasks={tasks} />
    </>
  )
}

export default Tasks
