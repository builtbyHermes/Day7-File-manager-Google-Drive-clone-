import Modal from "../../../components/Modal";

import styles from "./DeleteDialog.module.css";

function DeleteDialog({
  isOpen,
  file,
  onClose,
  onDelete,
}) {
  function handleDelete() {
    if (!file) return;

    onDelete?.(file);

    onClose?.();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={styles.container}>
        <h2>Delete Item</h2>

        <p>
          Are you sure you want to delete{" "}
          <strong>{file?.name}</strong>?
        </p>

        <p className={styles.warning}>
          This action cannot be undone.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className={styles.delete}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteDialog;