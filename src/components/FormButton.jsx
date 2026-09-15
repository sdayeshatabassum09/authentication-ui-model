import "./FormButton.css";
function FormButton({ children, type = "submit", onClick }) {
  return (
    <button
      type={type}
      className="form-button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default FormButton;