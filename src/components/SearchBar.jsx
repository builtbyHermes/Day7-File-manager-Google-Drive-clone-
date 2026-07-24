import { useEffect, useState } from "react";
import Input from "../Input";
import Spinner from "../Spinner";
import styles from "./SearchBar.module.css";

function SearchBar({
  value = "",
  onChange,
  placeholder = "Search files...",
  loading = false,
  disabled = false,
  debounce = 0,
  onClear,
  className = "",
  ...props
}) {
  const [inputValue, setInputValue] = useState(value);

  // Keep local state synchronized with parent state
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Debounce the search callback
  useEffect(() => {
    if (debounce <= 0) return;

    const timer = setTimeout(() => {
      onChange?.(inputValue);
    }, debounce);

    return () => clearTimeout(timer);
  }, [inputValue, debounce, onChange]);

  function handleChange(e) {
    const newValue = e.target.value;

    setInputValue(newValue);

    // No debounce -> update parent immediately
    if (debounce <= 0) {
      onChange?.(newValue);
    }
  }

  function handleClear() {
    setInputValue("");
    onChange?.("");
    onClear?.();
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <Input
        type="search"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        fullWidth
        leftIcon={
          loading ? (
            <Spinner size="sm" />
          ) : (
            <span className={styles.icon}>🔍</span>
          )
        }
        rightIcon={
          inputValue && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={handleClear}
              aria-label="Clear search"
            >
              ✕
            </button>
          )
        }
        {...props}
      />
    </div>
  );
}

export default SearchBar;