import { useEffect, useState } from "react";
import Input from "./Input";
import Spinner from "./Spinner";

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

  useEffect(() => {
    setInputValue(value);
  }, [value]);

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
    <div className={`search-bar ${className}`}>
      <Input
        type="search"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        fullWidth
        leftIcon={loading ? <Spinner size="sm" /> : <span>🔍</span>}
        rightIcon={
          inputValue && (
            <button
              type="button"
              onClick={handleClear}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}
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