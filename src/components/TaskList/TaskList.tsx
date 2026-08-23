import TaskCard from './TaskCard'
import type { TaskData } from '../Tasks/taskTypes'

type TaskListProps = {
  tasks: TaskData[]
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <ul className="flex flex-col gap-3 lg:hidden">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default TaskList
