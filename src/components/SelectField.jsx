function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = false
}) {

  return (
    <div className="form-group">

      <label htmlFor={name}>
        {label} {required && "*"}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >

        <option value="">
          Select {label}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}

      </select>

      {error && (
        <span className="error">
          {error}
        </span>
      )}

    </div>
  );
}

export default SelectField;