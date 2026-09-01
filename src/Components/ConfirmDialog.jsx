function ConfirmDialog({
  message,
  onConfirm,
  onCancel,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Confirm Delete</h2>

        <p>{message}</p>

        <div className="modal-actions">
          <button
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="btn btn-danger"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;