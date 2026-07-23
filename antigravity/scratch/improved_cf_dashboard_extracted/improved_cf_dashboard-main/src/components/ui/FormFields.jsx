export function FormField({ label, required, error, className = '', children }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label className="label">
          {label} {required && <span className="text-danger-600 font-bold ml-0.5">*</span>}
        </label>
      )}
      {children}
      {error && (
        <p className="text-xs text-danger-600 flex items-center gap-1 mt-1">
          <span className="text-[10px]">⚠</span> {error}
        </p>
      )}
    </div>
  )
}

export function TextInput({ label, required, error, className = '', ...props }) {
  return (
    <FormField label={label} required={required} error={error} className={className}>
      <input
        className={`input ${error ? 'border-danger-600 ring-2 ring-danger-600/20' : ''}`}
        {...props}
      />
    </FormField>
  )
}

export function SelectInput({ label, required, error, options = [], placeholder, className = '', ...props }) {
  return (
    <FormField label={label} required={required} error={error} className={className}>
      <select
        className={`select ${error ? 'border-danger-600 ring-2 ring-danger-600/20' : ''}`}
        {...props}
      >
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

export function TextareaInput({ label, required, error, rows = 3, className = '', ...props }) {
  return (
    <FormField label={label} required={required} error={error} className={className}>
      <textarea
        className={`input resize-none ${error ? 'border-danger-600 ring-2 ring-danger-600/20' : ''}`}
        rows={rows}
        {...props}
      />
    </FormField>
  )
}

export function ToggleInput({ label, checked, onChange, description, className = '' }) {
  return (
    <div className={`flex items-center justify-between py-2 gap-4 ${className}`}>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-surface-700 dark:text-surface-300">{label}</p>
        {description && <p className="text-xs text-surface-400 mt-0.5">{description}</p>}
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500/35 ${
          checked ? 'bg-primary-500' : 'bg-surface-300 dark:bg-surface-800'
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
            checked ? 'translate-x-4' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  )
}

export function CheckboxInput({ label, checked, onChange, error, className = '', ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-2.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          className={`w-4 h-4 rounded text-primary-500 border-surface-300 dark:border-surface-800 focus:ring-primary-500/30 focus:ring-2 bg-white dark:bg-surface-950 ${
            error ? 'border-danger-600' : 'border-surface-300 dark:border-surface-800'
          }`}
          {...props}
        />
        {label && (
          <label className="text-xs text-surface-600 dark:text-surface-400 font-semibold select-none cursor-pointer">
            {label}
          </label>
        )}
      </div>
      {error && (
        <p className="text-xs text-danger-600 flex items-center gap-1 mt-1">
          <span className="text-[10px]">⚠</span> {error}
        </p>
      )}
    </div>
  )
}

export function RadioInput({ label, name, options = [], value, onChange, error, className = '', ...props }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && <span className="label">{label}</span>}
      <div className="flex flex-wrap gap-4">
        {options.map(opt => {
          const optValue = typeof opt === 'string' ? opt : opt.value
          const optLabel = typeof opt === 'string' ? opt : opt.label
          const isSelected = value === optValue
          return (
            <label key={optValue} className="flex items-center gap-2 text-xs text-surface-600 dark:text-surface-400 font-semibold select-none cursor-pointer">
              <input
                type="radio"
                name={name}
                value={optValue}
                checked={isSelected}
                onChange={() => onChange(optValue)}
                className={`w-4 h-4 text-primary-500 border-surface-300 dark:border-surface-800 focus:ring-primary-500/30 focus:ring-2 bg-white dark:bg-surface-950 ${
                  error ? 'border-danger-600' : 'border-surface-300 dark:border-surface-800'
                }`}
                {...props}
              />
              {optLabel}
            </label>
          )
        })}
      </div>
      {error && (
        <p className="text-xs text-danger-600 flex items-center gap-1 mt-1">
          <span className="text-[10px]">⚠</span> {error}
        </p>
      )}
    </div>
  )
}
