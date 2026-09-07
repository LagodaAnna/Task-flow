import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import MoreIcon from '../Icon/MoreIcon'
import CalendarIcon from '../Icon/CalendarIcon'
import { priorityTone, statusTone } from '../Tasks/taskTone'
import type { TaskData } from '../Tasks/taskTypes'

type TaskCardProps = {
  task: TaskData
}

function TaskCard({ task }: TaskCardProps) {
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
        <Button
          variant="plain"
          aria-label={`Actions for ${task.title}`}
          className="size-8 shrink-0"
        >
          <MoreIcon aria-hidden="true" className="size-5" />
        </Button>
      </div>
    </li>
  )
}

export default TaskCard
