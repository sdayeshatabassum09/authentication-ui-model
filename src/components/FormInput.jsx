import "./FormInput.css";

function FormInput({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="form-input"
    />
  );
}

export default FormInput;