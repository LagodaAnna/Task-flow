import { useState, type CSSProperties, type MouseEvent } from 'react'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import 'react-day-picker/style.css'
import CalendarIcon from '../../../Icon/CalendarIcon'
import ChevronDownIcon from '../../../Icon/ChevronDownIcon'

type DateFieldProps = {
  id: string
  value: Date | undefined
  onChange: (date: Date | undefined) => void
}

const calendarStyle = {
  '--rdp-accent-color': 'var(--color-primary)',
  '--rdp-accent-background-color': 'var(--color-primary-soft)',
} as CSSProperties

function DateField({ id, value, onChange }: DateFieldProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleTriggerClick() {
    setIsOpen(true)
  }

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      setIsOpen(false)
    }
  }

  function handleSelectDate(date: Date | undefined) {
    onChange(date)
    setIsOpen(false)
  }

  return (
    <div>
      <button
        id={id}
        type="button"
        onClick={handleTriggerClick}
        className="flex h-11 w-full items-center gap-2 rounded-md border border-border bg-surface px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <CalendarIcon aria-hidden="true" className="size-4 shrink-0 text-text-muted" />
        <span className={value ? 'text-text' : 'text-text-placeholder'}>
          {value ? format(value, 'd MMM yyyy') : 'Select date (optional)'}
        </span>
        <ChevronDownIcon aria-hidden="true" className="ml-auto size-4 shrink-0 text-text-muted" />
      </button>

      {isOpen && (
        // Positioned relative to Modal's content wrapper, which is deliberately `relative`.
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-surface"
          onClick={handleOverlayClick}
        >
          <div className="rounded-md border border-border bg-surface p-2 shadow-card">
            <DayPicker
              mode="single"
              selected={value}
              onSelect={handleSelectDate}
              style={calendarStyle}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default DateField
