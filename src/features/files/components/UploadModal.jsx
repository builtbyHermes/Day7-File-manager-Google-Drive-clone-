import { useState } from "react";
import Modal from "../../../components/Modal";

function UploadModal({ isOpen, onClose, onUpload }) {
  const [files, setFiles] = useState([]);

  function handleChange(event) {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  }

  function handleUpload() {
    onUpload?.(files);
    setFiles([]);
    onClose?.();
  }

  function handleClose() {
    setFiles([]);
    onClose?.();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div>
        <h2 className="modal-header">Upload Files</h2>

        <input
          type="file"
          multiple
          className="input-field"
          onChange={handleChange}
          style={{ marginBottom: "1rem" }}
        />

        <div
          style={{
            maxHeight: "150px",
            overflowY: "auto",
            padding: "0.5rem",
            backgroundColor: "var(--bg-main)",
            borderRadius: "6px",
            fontSize: "0.85rem",
          }}
        >
          {files.length === 0 ? (
            <p style={{ color: "var(--text-muted)", textAlign: "center" }}>No files selected.</p>
          ) : (
            <ul style={{ paddingLeft: "1.2rem", color: "var(--text-main)" }}>
              {files.map((file) => (
                <li key={file.name}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={handleClose}>
            Cancel
          </button>

          <button
            className="btn btn-primary"
            onClick={handleUpload}
            disabled={files.length === 0}
          >
            Upload
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default UploadModal;