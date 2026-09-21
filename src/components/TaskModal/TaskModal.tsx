import { format, parse } from 'date-fns'
import Modal from '../Modal/Modal'
import TaskForm from './TaskForm/TaskForm'
import type { TaskFormValues } from './TaskForm/hooks/useTaskForm'
import type { TaskData } from '../Tasks/taskTypes'

type TaskModalProps = {
  task?: TaskData
  onClose: () => void
  onCreateTask: (task: TaskData) => void
  onUpdateTask: (task: TaskData) => void
}

function taskToFormValues(task: TaskData): TaskFormValues {
  return {
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    dueDate: task.dueDate ? parse(task.dueDate, 'd MMM yyyy', new Date()) : undefined,
  }
}

function TaskModal({ task, onClose, onCreateTask, onUpdateTask }: TaskModalProps) {
  function handleSubmit(values: TaskFormValues) {
    const dueDate = values.dueDate ? format(values.dueDate, 'd MMM yyyy') : ''
    const title = values.title.trim()
    const description = values.description.trim()

    if (task) {
      onUpdateTask({ ...task, title, description, status: values.status, priority: values.priority, dueDate })
    } else {
      onCreateTask({
        id: crypto.randomUUID(),
        title,
        description,
        status: values.status,
        priority: values.priority,
        dueDate,
        createdAt: new Date().toISOString(),
      })
    }
    onClose()
  }

  return (
    <Modal onClose={onClose} title={task ? 'Edit task' : 'Create new task'}>
      <TaskForm
        onSubmit={handleSubmit}
        onCancel={onClose}
        initialValues={task ? taskToFormValues(task) : undefined}
        submitLabel={task ? 'Save changes' : 'Create task'}
      />
    </Modal>
  )
}

export default TaskModal
