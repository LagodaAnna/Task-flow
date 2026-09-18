import Button from '../Button/Button'
import MoreIcon from '../Icon/MoreIcon'

type TaskActionsProps = {
  taskTitle: string
  isOpen: boolean
  onToggle: () => void
  onEdit: () => void
  onDelete: () => void
}

function TaskActions({ taskTitle, isOpen, onToggle, onEdit, onDelete }: TaskActionsProps) {
  function handleEditClick() {
    onEdit()
    onToggle()
  }

  function handleDeleteClick() {
    onDelete()
    onToggle()
  }

  return (
    <div data-task-actions className="relative inline-block">
      <Button
        variant="plain"
        aria-label={`Actions for ${taskTitle}`}
        aria-expanded={isOpen}
        onClick={onToggle}
        className="size-8 shrink-0 rounded-md transition-colors hover:bg-surface-alt"
      >
        <MoreIcon aria-hidden="true" className="size-5" />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 z-10 mt-1 min-w-32 rounded-md border border-border bg-surface py-1 shadow-card">
          <button
            type="button"
            onClick={handleEditClick}
            className="w-full px-3 py-2 text-left text-sm text-text hover:bg-surface-alt"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={handleDeleteClick}
            className="w-full px-3 py-2 text-left text-sm text-text hover:bg-surface-alt"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default TaskActions
