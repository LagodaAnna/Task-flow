import type { ChangeEvent } from 'react'
import ChevronDownIcon from '../../../Icon/ChevronDownIcon'

type SelectFieldOption<T extends string> = {
  value: T
  dotClassName: string
}

type SelectFieldProps<T extends string> = {
  id: string
  name: string
  value: T
  onChange: (value: T) => void
  options: SelectFieldOption<T>[]
}

function SelectField<T extends string>({
  id,
  name,
  value,
  onChange,
  options,
}: SelectFieldProps<T>) {
  const selected = options.find((option) => option.value === value)

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    onChange(event.target.value as T)
  }

  const dotClassName = selected
    ? `before:pointer-events-none before:absolute before:top-1/2 before:left-3 before:size-2.5 before:-translate-y-1/2 before:rounded-full before:content-[''] ${selected.dotClassName}`
    : ''

  return (
    <div className={`relative ${dotClassName}`}>
      <select
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        className="h-11 w-full appearance-none rounded-md border border-border bg-surface py-2 pr-8 pl-8 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      <ChevronDownIcon
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-text-muted"
      />
    </div>
  )
}

export default SelectField
