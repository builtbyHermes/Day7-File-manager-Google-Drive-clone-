import { useState, useRef, useEffect } from "react";
// import styles from "./Dropdown.module.css";

function Dropdown({
  trigger,
  items = [],
  onSelect,
  className = "",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);
  
  //we now have a selection hook
  function handleSelect(item) {
    if (item.disabled) return;

    onSelect?.(item);

    setIsOpen(false);
  }

  return (
    <div
      className={`${styles.container} ${className}`}
      ref={dropdownRef}
      {...props}
    >
      <div
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {trigger}
      </div>

      {isOpen && (
        <div className={styles.menu}>
          {items.map((item) => (
            <button
              key={item.value}
              className={`${styles.item} ${
                item.disabled ? styles.disabled : ""
              }`}
              onClick={() => handleSelect(item)}
              disabled={item.disabled}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;