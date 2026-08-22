import ChevronDownIcon from '../Icon/ChevronDownIcon'

type FilterSelectProps = {
  label: string
  id: string
  name: string
  options: string[]
}

function FilterSelect({ label, id, name, options }: FilterSelectProps) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        name={name}
        className="h-10 w-full appearance-none truncate rounded-[10px] border border-border bg-surface pl-3 pr-8 text-xs font-medium text-text lg:h-11 lg:w-[156px] lg:rounded-md lg:text-sm"
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
