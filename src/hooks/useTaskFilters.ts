import { useState } from 'react'
import {
  ALL_STATUSES,
  ALL_PRIORITIES,
  SORT,
  type StatusFilter,
  type PriorityFilter,
  type SortOrder,
} from '../components/Tasks/utils/getVisibleTasks'

export function useTaskFilters() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<StatusFilter>(ALL_STATUSES)
  const [priority, setPriority] = useState<PriorityFilter>(ALL_PRIORITIES)
  const [sort, setSort] = useState<SortOrder>(SORT.NEWEST)

  return { search, setSearch, status, setStatus, priority, setPriority, sort, setSort }
}
