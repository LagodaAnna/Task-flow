import StatsCard from '../StatsCard/StatsCard'
import { getTaskStats } from './utils/getTaskStats'
import type { TaskData } from '../Tasks/taskTypes'

type StatsProps = {
  tasks: TaskData[]
}

function Stats({ tasks }: StatsProps) {
  const stats = getTaskStats(tasks)

  return (
    <section aria-label="Task statistics">
      <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-7">
        <StatsCard label="Total tasks" value={stats.total} accent="primary" />
        <StatsCard label="In progress" value={stats.inProgress} accent="progress" />
        <StatsCard
          label="Completed"
          value={stats.completed}
          accent="done"
          className="col-span-2 sm:col-span-1"
        />
      </dl>
    </section>
  )
}

export default Stats
