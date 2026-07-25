import { useEffect, useState } from "react";
import Modal from "../../../components/Modal";

import styles from "./CreateFolderModal.module.css";

function CreateFolderModal({
  isOpen,
  onClose,
  onCreate,
}) {
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
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
    >
      <form
        className={styles.container}
        onSubmit={handleSubmit}
      >
        <h2>Create Folder</h2>

        <label htmlFor="folder-name">
          Folder Name
        </label>

        <input
          id="folder-name"
          type="text"
          value={folderName}
          onChange={(e) =>
            setFolderName(e.target.value)
          }
          placeholder="New Folder"
          autoFocus
        />

        <div className={styles.actions}>
          <button
            type="button"
            onClick={handleClose}
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={!folderName.trim()}
          >
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default CreateFolderModal;