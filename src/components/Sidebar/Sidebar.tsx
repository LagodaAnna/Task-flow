import type { ComponentType, SVGProps } from 'react'
import DashboardIcon from '../Icon/DashboardIcon'
import TasksIcon from '../Icon/TasksIcon'
import TodayIcon from '../Icon/TodayIcon'
import CompletedIcon from '../Icon/CompletedIcon'
import UserIcon from '../Icon/UserIcon'

type NavItem = {
  label: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/', icon: DashboardIcon },
  { label: 'All Tasks', href: '/tasks', icon: TasksIcon },
  { label: 'Today', href: '/today', icon: TodayIcon },
  { label: 'Completed', href: '/completed', icon: CompletedIcon },
]

const activeHref = '/'

function Sidebar() {
  return (
    <div className="hidden w-[236px] shrink-0 flex-col rounded-xl border border-border bg-surface lg:flex">
      <div className="px-4 pt-6 pb-4">
        <span className="text-xl font-bold text-text">TaskFlow</span>
      </div>

      <nav aria-label="Main navigation" className="px-4">
        <ul className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = item.href === activeHref
            const Icon = item.icon

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex h-10 items-center gap-2 rounded-[10px] px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    isActive
                      ? 'bg-primary-soft font-semibold text-primary'
                      : 'font-medium text-text-muted hover:bg-surface-alt'
                  }`}
                >
                  <Icon aria-hidden="true" className="size-5" />
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-auto flex items-center gap-3 border-t border-border px-4 py-4">
        <UserIcon aria-hidden="true" className="size-6" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-text">Adam Smith</span>
          <span className="text-xs font-normal text-text-muted">
            Personal workspace
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
