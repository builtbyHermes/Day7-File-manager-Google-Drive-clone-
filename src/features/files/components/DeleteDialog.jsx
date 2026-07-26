import Modal from "../../../components/Modal";

function DeleteDialog({ isOpen, file, onClose, onDelete }) {
  function handleDelete() {
    if (!file) return;
    onDelete?.(file);
    onClose?.();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <h2 className="modal-header">Delete Item</h2>

        <p style={{ fontSize: "0.95rem", color: "var(--text-main)", marginBottom: "0.5rem" }}>
          Are you sure you want to delete <strong>{file?.name}</strong>?
        </p>

        <p style={{ fontSize: "0.85rem", color: "#ef4444", marginBottom: "1rem" }}>
          This item will be removed from your Drive.
        </p>

        <div className="modal-actions">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>

          <button type="button" className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteDialog;