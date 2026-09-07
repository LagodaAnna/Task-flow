import type { ReactNode } from 'react'

type FormFieldProps = {
  label: string
  htmlFor: string
  required?: boolean
  error?: string
  children: ReactNode
}

function FormField({ label, htmlFor, required, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className={`text-sm font-semibold text-text ${
          required ? "after:ml-0.5 after:text-danger after:content-['*']" : ''
        }`}
      >
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField
