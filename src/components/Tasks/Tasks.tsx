import { useEffect, useState } from 'react'
import TaskTable from '../TaskTable/TaskTable'
import TaskList from '../TaskList/TaskList'
import type { TaskData } from './taskTypes'

type TasksProps = {
  tasks: TaskData[]
  onEditTask: (task: TaskData) => void
}

function Tasks({ tasks, onEditTask }: TasksProps) {
  const [openTaskId, setOpenTaskId] = useState<string | null>(null)

  useEffect(() => {
    if (openTaskId === null) return

    function handleOutsideClick(event: MouseEvent) {
      const target = event.target as Element
      if (!target.closest('[data-task-actions]')) {
        setOpenTaskId(null)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [openTaskId])

  function handleToggleTaskActions(taskId: string) {
    setOpenTaskId((current) => (current === taskId ? null : taskId))
  }

  return (
    <>
      <TaskTable
        tasks={tasks}
        onEditTask={onEditTask}
        openTaskId={openTaskId}
        onToggleTaskActions={handleToggleTaskActions}
      />
      <TaskList
        tasks={tasks}
        onEditTask={onEditTask}
        openTaskId={openTaskId}
        onToggleTaskActions={handleToggleTaskActions}
      />
    </>
  )
}

export default Tasks
