import TaskRow from './TaskRow'
import type { TaskData } from '../Tasks/taskTypes'

type TaskTableProps = {
  tasks: TaskData[]
  onEditTask: (task: TaskData) => void
  openTaskId: string | null
  onToggleTaskActions: (taskId: string) => void
}

function TaskTable({ tasks, onEditTask, openTaskId, onToggleTaskActions }: TaskTableProps) {
  return (
    <div className="hidden rounded-lg border border-border bg-surface lg:block">
      <table className="w-full">
        <caption className="sr-only">Tasks</caption>
        <thead>
          <tr className="border-b border-border text-left text-xs text-text-muted">
            <th scope="col" className="py-3 pr-4 pl-6 font-semibold">
              Task
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Due date
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Priority
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Status
            </th>
            <th scope="col" className="py-3 pr-6 pl-4">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              onEditTask={onEditTask}
              isActionsOpen={openTaskId === task.id}
              onToggleActions={onToggleTaskActions}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TaskTable
