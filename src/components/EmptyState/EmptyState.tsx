import Button from '../Button/Button'
import PlusIcon from '../Icon/PlusIcon'
import emptyStateIllustration from '../../assets/illustrations/empty-state-illustration.svg'

type EmptyStateProps = {
  onAddTask: () => void
}

function EmptyState({ onAddTask }: EmptyStateProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 rounded-lg border border-border bg-surface px-6 py-16 text-center">
      <img src={emptyStateIllustration} alt="" className="size-40" />

      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-text">No tasks yet</h2>
        <p className="text-sm text-text-muted">
          Create your first task to get started.
        </p>
      </div>

      <Button variant="primary" className="h-11 px-4" onClick={onAddTask}>
        <PlusIcon aria-hidden="true" className="size-4" />
        Add task
      </Button>
    </div>
  )
}

export default EmptyState
