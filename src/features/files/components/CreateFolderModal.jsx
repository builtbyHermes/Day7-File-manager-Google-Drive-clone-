import { useEffect, useState } from "react";
import Modal from "../../../components/Modal";

function CreateFolderModal({ isOpen, onClose, onCreate }) {
  const [folderName, setFolderName] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setFolderName("");
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedName = folderName.trim();
    if (!trimmedName) return;

    onCreate?.(trimmedName);
    setFolderName("");
    onClose?.();
  }

  function handleClose() {
    setFolderName("");
    onClose?.();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2 className="modal-header">Create Folder</h2>

        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="folder-name"
            style={{ display: "block", fontSize: "0.875rem", marginBottom: "0.5rem", color: "var(--text-muted)" }}
          >
            Folder Name
          </label>

          <input
            id="folder-name"
            className="input-field"
            type="text"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            placeholder="New Folder"
            autoFocus
          />
        </div>

        <div className="modal-actions">
          <button type="button" className="btn btn-secondary" onClick={handleClose}>
            Cancel
          </button>

          <button type="submit" className="btn btn-primary" disabled={!folderName.trim()}>
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default CreateFolderModal;