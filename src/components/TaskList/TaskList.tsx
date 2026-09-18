import TaskCard from './TaskCard'
import type { TaskData } from '../Tasks/taskTypes'

type TaskListProps = {
  tasks: TaskData[]
  onEditTask: (task: TaskData) => void
  onDeleteTask: (task: TaskData) => void
  openTaskId: string | null
  onToggleTaskActions: (taskId: string) => void
}

function TaskList({
  tasks,
  onEditTask,
  onDeleteTask,
  openTaskId,
  onToggleTaskActions,
}: TaskListProps) {
  return (
    <ul className="flex flex-col gap-3 lg:hidden">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          isActionsOpen={openTaskId === task.id}
          onToggleActions={onToggleTaskActions}
        />
      ))}
    </ul>
  )
}

export default TaskList
