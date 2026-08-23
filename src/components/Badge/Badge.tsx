import type { ReactNode } from 'react'

type BadgeTone =
  | 'priority-low'
  | 'priority-medium'
  | 'priority-high'
  | 'status-todo'
  | 'status-progress'
  | 'status-done'

type BadgeProps = {
  tone: BadgeTone
  children: ReactNode
}

const toneStyles: Record<BadgeTone, string> = {
  'priority-low': 'bg-priority-low-bg text-priority-low-text',
  'priority-medium': 'bg-priority-medium-bg text-priority-medium-text',
  'priority-high': 'bg-priority-high-bg text-priority-high-text',
  'status-todo': 'bg-status-todo-bg text-status-todo-text',
  'status-progress': 'bg-status-progress-bg text-status-progress-text',
  'status-done': 'bg-status-done-bg text-status-done-text',
}

function Badge({ tone, children }: BadgeProps) {
  return (
    <span
      className={`inline-flex h-7 items-center justify-center rounded-full px-3 text-xs font-semibold ${toneStyles[tone]}`}
    >
      {children}
    </span>
  )
}

export default Badge
