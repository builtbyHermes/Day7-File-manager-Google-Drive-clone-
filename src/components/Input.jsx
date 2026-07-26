import { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  {
    label,
    type = "text",
    value,
    onChange,
    placeholder = "",
    disabled = false,
    required = false,
    error = "",
    helperText = "",
    leftIcon,
    rightIcon,
    fullWidth = false,
    className = "",
    id,
    ...props
  },
  ref
) {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={`input-container ${fullWidth ? "full-width" : ""}`}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}

      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {leftIcon && (
          <span style={{ position: "absolute", left: "10px", color: "var(--text-muted)" }}>
            {leftIcon}
          </span>
        )}

        <input
          ref={ref}
          id={inputId}
          className={`input-field ${className}`}
          style={{
            paddingLeft: leftIcon ? "2.25rem" : "0.75rem",
            paddingRight: rightIcon ? "2.25rem" : "0.75rem",
          }}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          {...props}
        />

        {rightIcon && (
          <span style={{ position: "absolute", right: "10px", color: "var(--text-muted)" }}>
            {rightIcon}
          </span>
        )}
      </div>

      {error ? (
        <p style={{ color: "#ef4444", fontSize: "0.8rem", marginTop: "0.25rem" }}>{error}</p>
      ) : (
        helperText && (
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
            {helperText}
          </p>
        )
      )}
    </div>
  );
});

export default Input;