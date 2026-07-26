import { useEffect, useState } from "react";
import Modal from "../../../components/Modal";

// import styles from "./RenameModal.module.css";

function RenameModal({
  isOpen,
  file,
  onClose,
  onRename,
}) {
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
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
    >
      <form
        className={styles.container}
        onSubmit={handleSubmit}
      >
        <h2>Rename</h2>

        <label htmlFor="rename-input">
          New Name
        </label>

        <input
          id="rename-input"
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
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
            disabled={!name.trim()}
          >
            Rename
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default RenameModal;