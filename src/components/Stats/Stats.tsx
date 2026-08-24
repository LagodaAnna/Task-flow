import StatsCard from '../StatsCard/StatsCard'

function Stats() {
  return (
    <section aria-label="Task statistics">
      <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-7">
        <StatsCard label="Total tasks" value={12} accent="primary" />
        <StatsCard label="In progress" value={4} accent="progress" />
        <StatsCard
          label="Completed"
          value={3}
          accent="done"
          className="col-span-2 sm:col-span-1"
        />
      </dl>
    </section>
  )
}

export default Stats
