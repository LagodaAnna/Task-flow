type StatAccent = 'primary' | 'progress' | 'done'

type StatsCardProps = {
  label: string
  value: number
  accent: StatAccent
  className?: string
}

const chipStyles: Record<StatAccent, string> = {
  primary: 'before:bg-primary-soft',
  progress: 'before:bg-status-progress-bg',
  done: 'before:bg-status-done-bg',
}

const valueStyles: Record<StatAccent, string> = {
  primary: 'text-primary',
  progress: 'text-status-progress-text',
  done: 'text-status-done-text',
}

function StatsCard({ label, value, accent, className = '' }: StatsCardProps) {
  return (
    <div
      className={`rounded-[14px] border border-border bg-surface p-[18px] before:hidden before:size-10 before:rounded-md before:content-[''] lg:grid lg:grid-cols-[2.5rem_1fr] lg:items-center lg:gap-x-[18px] lg:rounded-lg lg:before:col-start-1 lg:before:row-span-2 lg:before:block ${chipStyles[accent]} ${className}`}
    >
      <dt className="text-xs font-medium text-text-muted lg:col-start-2">
        {label}
      </dt>
      <dd className={`text-xl font-bold lg:col-start-2 ${valueStyles[accent]}`}>
        {value}
      </dd>
    </div>
  )
}

export default StatsCard
