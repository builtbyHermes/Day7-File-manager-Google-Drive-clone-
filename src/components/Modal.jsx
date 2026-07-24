import { createPortal } from "react-dom";
import { useEffect } from "react";
import styles from "./Modal.module.css";

function Modal({ children, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    function handleEsc(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.removeProperty("overflow");
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;