import Modal from '../Modal/Modal'
import Button from '../Button/Button'

type DeleteTaskDialogProps = {
  taskTitle: string
  onCancel: () => void
  onConfirm: () => void
}

function DeleteTaskDialog({ taskTitle, onCancel, onConfirm }: DeleteTaskDialogProps) {
  return (
    <Modal onClose={onCancel} title="Delete task">
      <p className="text-sm text-text-muted">
        Are you sure you want to delete “{taskTitle}”? This action cannot be undone.
      </p>
      <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Button variant="secondary" onClick={onCancel} className="h-11 w-full px-4 sm:w-auto">
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm} className="h-11 w-full px-4 sm:w-auto">
          Delete task
        </Button>
      </div>
    </Modal>
  )
}

export default DeleteTaskDialog
