import { useState, useRef, useEffect } from "react";

function Dropdown({
  trigger,
  items = [],
  options = [],
  onSelect,
  onChange,
  value,
  className = "",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dropdownItems = items.length > 0 ? items : options;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSelect(item) {
    if (item.disabled) return;
    const selectedVal = item.value || item.id;

    if (onSelect) onSelect(item);
    if (onChange) onChange(selectedVal);

    setIsOpen(false);
  }

  const selectedItem = dropdownItems.find(
    (item) => (item.value || item.id) === value
  );

  return (
    <div
      className={`dropdown-container ${className}`}
      ref={dropdownRef}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        className="dropdown-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ cursor: "pointer" }}
      >
        {trigger ? (
          trigger
        ) : (
          <button className="btn btn-secondary">
            {selectedItem ? selectedItem.label : "Sort by"} ▼
          </button>
        )}
      </div>

      {isOpen && (
        <div
          className="context-menu"
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: "0.25rem",
          }}
        >
          {dropdownItems.map((item) => (
            <button
              key={item.value || item.id}
              className="context-menu-item"
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