import Badge from '../Badge/Badge'
import TaskActions from '../TaskActions/TaskActions'
import CalendarIcon from '../Icon/CalendarIcon'
import { priorityTone, statusTone } from '../Tasks/taskTone'
import type { TaskData } from '../Tasks/taskTypes'

type TaskCardProps = {
  task: TaskData
  onEditTask: (task: TaskData) => void
  onDeleteTask: (task: TaskData) => void
  isActionsOpen: boolean
  onToggleActions: (taskId: string) => void
}

function TaskCard({
  task,
  onEditTask,
  onDeleteTask,
  isActionsOpen,
  onToggleActions,
}: TaskCardProps) {
  function handleEdit() {
    onEditTask(task)
  }

  function handleDelete() {
    onDeleteTask(task)
  }

  function handleToggleActions() {
    onToggleActions(task.id)
  }

  return (
    <li className="relative rounded-[14px] border border-border bg-surface p-4">
      <div className="pr-10">
        <p className="text-sm font-semibold text-text">{task.title}</p>
        <p className="mt-1 text-xs text-text-muted">{task.description}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Badge tone={priorityTone[task.priority]}>{task.priority}</Badge>
        <Badge tone={statusTone[task.status]}>{task.status}</Badge>
      </div>

      {task.dueDate && (
        <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-text-muted">
          <CalendarIcon aria-hidden="true" className="size-4" />
          Due {task.dueDate}
        </div>
      )}

      <div className="absolute top-4 right-4">
        <TaskActions
          taskTitle={task.title}
          isOpen={isActionsOpen}
          onToggle={handleToggleActions}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </li>
  )
}

export default TaskCard
