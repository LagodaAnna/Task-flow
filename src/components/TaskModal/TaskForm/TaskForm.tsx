import type { ChangeEvent, FormEvent } from 'react'
import FormField from './FormField/FormField'
import SelectField from './SelectField/SelectField'
import DateField from './DateField/DateField'
import { useTaskForm, type TaskFormValues } from './hooks/useTaskForm'
import Button from '../../Button/Button'
import { PRIORITY, STATUS, type Priority, type Status } from '../../Tasks/taskTypes'
import { statusDotColor, priorityDotColor } from '../../Tasks/taskTone'

const STATUS_OPTIONS = Object.values(STATUS).map((status) => ({
  value: status,
  dotClassName: statusDotColor[status],
}))

const PRIORITY_OPTIONS = Object.values(PRIORITY).map((priority) => ({
  value: priority,
  dotClassName: priorityDotColor[priority],
}))

type TaskFormProps = {
  onSubmit: (values: TaskFormValues) => void
  onCancel: () => void
  initialValues?: TaskFormValues
  submitLabel: string
}

function TaskForm({ onSubmit, onCancel, initialValues, submitLabel }: TaskFormProps) {
  const { values, errors, setField, validate, descriptionMaxLength } = useTaskForm(initialValues)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (validate()) {
      onSubmit(values)
    }
  }

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setField('title', event.target.value)
  }

  function handleDescriptionChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setField('description', event.target.value.slice(0, descriptionMaxLength))
  }

  function handleStatusChange(value: Status) {
    setField('status', value)
  }

  function handlePriorityChange(value: Priority) {
    setField('priority', value)
  }

  function handleDueDateChange(date: Date | undefined) {
    setField('dueDate', date)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label="Title" htmlFor="task-title" required error={errors.title}>
        <input
          id="task-title"
          type="text"
          value={values.title}
          onChange={handleTitleChange}
          placeholder="Enter task title..."
          className={`h-11 w-full rounded-md border bg-surface px-3 text-sm text-text placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
            errors.title ? 'border-danger' : 'border-border'
          }`}
        />
      </FormField>

      <FormField label="Description" htmlFor="task-description">
        <textarea
          id="task-description"
          value={values.description}
          onChange={handleDescriptionChange}
          placeholder="Add a description (optional)..."
          rows={3}
          className="w-full resize-none rounded-md border border-border bg-surface px-3 py-2 text-sm text-text placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        />
        <p className="text-right text-xs text-text-muted">
          {values.description.length}/{descriptionMaxLength}
        </p>
      </FormField>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Status" htmlFor="task-status" required>
          <SelectField<Status>
            id="task-status"
            name="status"
            value={values.status}
            onChange={handleStatusChange}
            options={STATUS_OPTIONS}
          />
        </FormField>

        <FormField label="Priority" htmlFor="task-priority" required>
          <SelectField<Priority>
            id="task-priority"
            name="priority"
            value={values.priority}
            onChange={handlePriorityChange}
            options={PRIORITY_OPTIONS}
          />
        </FormField>
      </div>

      <FormField label="Due date" htmlFor="task-due-date">
        <DateField id="task-due-date" value={values.dueDate} onChange={handleDueDateChange} />
      </FormField>

      <div className="mt-2 flex justify-end gap-3">
        <Button variant="secondary" onClick={onCancel} className="h-11 px-4">
          Cancel
        </Button>
        <Button type="submit" variant="primary" className="h-11 px-4">
          {submitLabel}
        </Button>
      </div>
    </form>
  )
}

export default TaskForm
