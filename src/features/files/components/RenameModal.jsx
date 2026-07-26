import { useEffect, useState } from "react";
import Modal from "../../../components/Modal";

function RenameModal({ isOpen, file, onClose, onRename }) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (isOpen && file) {
      setName(file.name);
    }
  }, [isOpen, file]);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) return;

    onRename?.(file, trimmedName);
    onClose?.();
  }

  function handleClose() {
    setName("");
    onClose?.();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2 className="modal-header">Rename Item</h2>

        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="rename-input"
            style={{ display: "block", fontSize: "0.875rem", marginBottom: "0.5rem", color: "var(--text-muted)" }}
          >
            New Name
          </label>

          <input
            id="rename-input"
            className="input-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </div>

        <div className="modal-actions">
          <button type="button" className="btn btn-secondary" onClick={handleClose}>
            Cancel
          </button>

          <button type="submit" className="btn btn-primary" disabled={!name.trim()}>
            Rename
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default RenameModal;