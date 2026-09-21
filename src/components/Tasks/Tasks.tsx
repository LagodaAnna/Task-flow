import { useEffect, useState } from 'react'
import TaskTable from '../TaskTable/TaskTable'
import TaskList from '../TaskList/TaskList'
import EmptyState from '../EmptyState/EmptyState'
import NoResultsState from '../NoResultsState/NoResultsState'
import type { TaskData } from './taskTypes'

type TasksProps = {
  tasks: TaskData[]
  hasTasks: boolean
  onAddTask: () => void
  onEditTask: (task: TaskData) => void
  onDeleteTask: (task: TaskData) => void
}

function Tasks({ tasks, hasTasks, onAddTask, onEditTask, onDeleteTask }: TasksProps) {
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

  if (tasks.length === 0) {
    return hasTasks ? <NoResultsState /> : <EmptyState onAddTask={onAddTask} />
  }

  return (
    <>
      <TaskTable
        tasks={tasks}
        onEditTask={onEditTask}
        onDeleteTask={onDeleteTask}
        openTaskId={openTaskId}
        onToggleTaskActions={handleToggleTaskActions}
      />
      <TaskList
        tasks={tasks}
        onEditTask={onEditTask}
        onDeleteTask={onDeleteTask}
        openTaskId={openTaskId}
        onToggleTaskActions={handleToggleTaskActions}
      />
    </>
  )
}

export default Tasks
