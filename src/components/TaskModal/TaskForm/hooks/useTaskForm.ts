import { useState } from 'react'
import { PRIORITY, STATUS, type Priority, type Status } from '../../../Tasks/taskTypes'

const DESCRIPTION_MAX_LENGTH = 500

export type TaskFormValues = {
  title: string
  description: string
  status: Status
  priority: Priority
  dueDate: Date | undefined
}

type TaskFormErrors = Partial<Record<'title', string>>

function getInitialValues(): TaskFormValues {
  return {
    title: '',
    description: '',
    status: STATUS.TODO,
    priority: PRIORITY.MEDIUM,
    dueDate: undefined,
  }
}

export function useTaskForm(initialValues?: TaskFormValues) {
  const [values, setValues] = useState<TaskFormValues>(() => initialValues ?? getInitialValues())
  const [errors, setErrors] = useState<TaskFormErrors>({})

  function setField<K extends keyof TaskFormValues>(field: K, value: TaskFormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }))
  }

  function validate(): boolean {
    const nextErrors: TaskFormErrors = {}

    if (!values.title.trim()) {
      nextErrors.title = 'Title is required'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  return {
    values,
    errors,
    setField,
    validate,
    descriptionMaxLength: DESCRIPTION_MAX_LENGTH,
  }
}
