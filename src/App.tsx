import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Stats from './components/Stats/Stats'
import TaskFilters from './components/TaskFilters/TaskFilters'
import Tasks from './components/Tasks/Tasks'
import TaskModal from './components/TaskModal/TaskModal'
import { useTasks } from './hooks/useTasks'
import type { TaskData } from './components/Tasks/taskTypes'

type TaskModalState =
  | { type: 'create' }
  | { type: 'edit'; task: TaskData }
  | null

function App() {
  const { tasks, addTask, updateTask } = useTasks()
  const [taskModal, setTaskModal] = useState<TaskModalState>(null)

  function handleAddTask() {
    setTaskModal({ type: 'create' })
  }

  function handleCloseTaskModal() {
    setTaskModal(null)
  }

  return (
    <div className="flex min-h-screen flex-col gap-10 p-5 sm:p-6 lg:flex-row">
      <Sidebar />
      <div className="flex flex-1 flex-col gap-6">
        <Header onAddTask={handleAddTask} />
        <main className="flex flex-1 flex-col gap-6">
          <Stats tasks={tasks} />
          <TaskFilters />
          <Tasks tasks={tasks} />
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
    </div>
  )
}

export default App
