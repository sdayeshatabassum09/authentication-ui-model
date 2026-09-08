function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  maxLength
}) {

  return (
    <div className="form-group">

      <label htmlFor={name}>
        {label} {required && "*"}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />

      {error && (
        <span className="error">
          {error}
        </span>
      )}

    </div>
  );
}

export default InputField;