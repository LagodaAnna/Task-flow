import type { ChangeEvent } from 'react'
import ChevronDownIcon from '../Icon/ChevronDownIcon'

type FilterSelectProps<T extends string> = {
  label: string
  id: string
  name: string
  options: T[]
  value: T
  onChange: (value: T) => void
}

function FilterSelect<T extends string>({
  label,
  id,
  name,
  options,
  value,
  onChange,
}: FilterSelectProps<T>) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    onChange(event.target.value as T)
  }

  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        className="h-10 w-full appearance-none truncate rounded-[10px] border border-border bg-surface pl-3 pr-8 text-xs font-medium text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:h-11 lg:w-[156px] lg:rounded-md lg:text-sm"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDownIcon
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-text-muted"
      />
    </div>
  )
}

export default FilterSelect
