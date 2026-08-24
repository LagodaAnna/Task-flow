import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import MoreIcon from '../Icon/MoreIcon'
import CalendarIcon from '../Icon/CalendarIcon'
import { priorityTone, statusTone } from '../Tasks/taskTone'
import type { TaskData } from '../Tasks/taskTypes'

type TaskRowProps = {
  task: TaskData
}

function TaskRow({ task }: TaskRowProps) {
  return (
    <tr>
      <td className="py-4 pr-4 pl-6 align-top">
        <p className="text-sm font-semibold text-text">{task.title}</p>
        <p className="mt-1 text-xs text-text-muted">{task.description}</p>
      </td>
      <td className="px-4 py-4 align-top whitespace-nowrap">
        <span className="inline-flex items-center gap-1.5 text-sm text-text">
          <CalendarIcon aria-hidden="true" className="size-4 text-text-muted" />
          {task.dueDate}
        </span>
      </td>
      <td className="px-4 py-4 align-top">
        <Badge tone={priorityTone[task.priority]}>{task.priority}</Badge>
      </td>
      <td className="px-4 py-4 align-top">
        <Badge tone={statusTone[task.status]}>{task.status}</Badge>
      </td>
      <td className="py-4 pr-6 pl-4 text-right align-top">
        <Button
          variant="plain"
          aria-label={`Actions for ${task.title}`}
          className="size-8 shrink-0"
        >
          <MoreIcon aria-hidden="true" className="size-5" />
        </Button>
      </td>
    </tr>
  )
}

export default TaskRow
