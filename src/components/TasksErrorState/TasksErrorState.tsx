import Button from '../Button/Button'
import AlertIcon from '../Icon/AlertIcon'

function TasksErrorState() {
  function handleRetry() {
    window.location.reload()
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 rounded-lg border border-border bg-surface px-6 py-16 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-danger/10">
        <AlertIcon aria-hidden="true" className="size-7 text-danger" />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-text">Couldn&apos;t load your tasks</h2>
        <p className="text-sm text-text-muted">Something went wrong. Please try again.</p>
      </div>

      <Button variant="primary" className="h-11 px-4" onClick={handleRetry}>
        Try again
      </Button>
    </div>
  )
}

export default TasksErrorState
