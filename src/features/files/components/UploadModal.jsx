import { useState } from "react";
import Modal from "../../../components/Modal";

import styles from "./UploadModal.module.css";

function UploadModal({
  isOpen,
  onClose,
  onUpload,
}) {
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
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
    >
      <div className={styles.container}>
        <h2>Upload Files</h2>

        <input
          type="file"
          multiple
          onChange={handleChange}
        />

        <div className={styles.fileList}>
          {files.length === 0 ? (
            <p>No files selected.</p>
          ) : (
            <ul>
              {files.map((file) => (
                <li key={file.name}>
                  {file.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.actions}>
          <button onClick={handleClose}>
            Cancel
          </button>

          <button
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