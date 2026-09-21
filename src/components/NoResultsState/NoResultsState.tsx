import SearchIcon from '../Icon/SearchIcon'

function NoResultsState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 rounded-lg border border-border bg-surface px-6 py-16 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-primary-soft">
        <SearchIcon aria-hidden="true" className="size-7 text-primary" />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-text">No matching tasks</h2>
        <p className="text-sm text-text-muted">Try adjusting your search or filters.</p>
      </div>
    </div>
  )
}

export default NoResultsState
