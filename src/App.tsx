import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Stats from './components/Stats/Stats'
import TaskFilters from './components/TaskFilters/TaskFilters'
import Tasks from './components/Tasks/Tasks'
import TaskModal from './components/TaskModal/TaskModal'
import DeleteTaskDialog from './components/DeleteTaskDialog/DeleteTaskDialog'
import TasksErrorState from './components/TasksErrorState/TasksErrorState'
import { useTasks } from './hooks/useTasks'
import { useTaskFilters } from './hooks/useTaskFilters'
import { getVisibleTasks } from './components/Tasks/utils/getVisibleTasks'
import type { TaskData } from './components/Tasks/taskTypes'

type TaskModalState =
  | { type: 'create' }
  | { type: 'edit'; task: TaskData }
  | null

type TaskToDeleteState = TaskData | null

function App() {
  const { tasks, addTask, updateTask, deleteTask, loadError } = useTasks()
  const {
    search,
    setSearch,
    status,
    setStatus,
    priority,
    setPriority,
    sort,
    setSort,
  } = useTaskFilters()
  const [taskModal, setTaskModal] = useState<TaskModalState>(null)
  const [taskToDelete, setTaskToDelete] = useState<TaskToDeleteState>(null)

  const visibleTasks = getVisibleTasks(tasks, {
    search,
    status,
    priority,
    sort,
  })

  function handleAddTask() {
    setTaskModal({ type: 'create' })
  }

  function handleEditTask(task: TaskData) {
    setTaskModal({ type: 'edit', task })
  }

  function handleCloseTaskModal() {
    setTaskModal(null)
  }

  function handleDeleteTask(task: TaskData) {
    setTaskToDelete(task)
  }

  function handleCancelDelete() {
    setTaskToDelete(null)
  }

  function handleConfirmDelete() {
    if (taskToDelete) {
      deleteTask(taskToDelete.id)
    }
    setTaskToDelete(null)
  }

  return (
    <div className="flex min-h-screen flex-col gap-10 p-5 sm:p-6 lg:flex-row">
      <Sidebar />
      <div className="flex flex-1 flex-col gap-6">
        <Header onAddTask={handleAddTask} />
        <main className="flex flex-1 flex-col gap-6">
          {loadError ? (
            <TasksErrorState />
          ) : (
            <>
              <Stats tasks={tasks} />
              <TaskFilters
                search={search}
                onSearchChange={setSearch}
                status={status}
                onStatusChange={setStatus}
                priority={priority}
                onPriorityChange={setPriority}
                sort={sort}
                onSortChange={setSort}
              />
              <Tasks
                tasks={visibleTasks}
                hasTasks={tasks.length > 0}
                onAddTask={handleAddTask}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
              />
            </>
          )}
        </main>
      </div>

      {taskModal && (
        <TaskModal
          task={taskModal.type === 'edit' ? taskModal.task : undefined}
          onClose={handleCloseTaskModal}
          onCreateTask={addTask}
          onUpdateTask={updateTask}
        />
      )}

      {taskToDelete && (
        <DeleteTaskDialog
          taskTitle={taskToDelete.title}
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  )
}

export default App
