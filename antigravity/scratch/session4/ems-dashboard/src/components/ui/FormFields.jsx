export function FormField({ label, required, error, children }) {
  return (
    <div>
      {label && (
        <label className="label">
          {label} {required && <span className="text-danger-600">*</span>}
        </label>
      )}
      {children}
      {error && <p className="mt-1 text-xs text-danger-600">{error}</p>}
    </div>
  )
}

export function TextInput({ label, required, error, ...props }) {
  return (
    <FormField label={label} required={required} error={error}>
      <input className="input" {...props} />
    </FormField>
  )
}

export function SelectInput({ label, required, error, options = [], placeholder, ...props }) {
  return (
    <FormField label={label} required={required} error={error}>
      <select className="select" {...props}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(opt =>
          typeof opt === 'string'
            ? <option key={opt} value={opt}>{opt}</option>
            : <option key={opt.value} value={opt.value}>{opt.label}</option>
        )}
      </select>
    </FormField>
  )
}

export function TextareaInput({ label, required, error, rows = 3, ...props }) {
  return (
    <FormField label={label} required={required} error={error}>
      <textarea className="input resize-none" rows={rows} {...props} />
    </FormField>
  )
}

export function ToggleInput({ label, checked, onChange, description }) {
  return (
    <div className="flex items-center justify-between py-1">
      <div>
        <p className="text-sm text-surface-200">{label}</p>
        {description && <p className="text-xs text-surface-500 mt-0.5">{description}</p>}
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
          checked ? 'bg-primary-600' : 'bg-surface-700'
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            checked ? 'translate-x-4' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  )
}
