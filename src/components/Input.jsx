import { forwardRef, useId } from "react";
// import styles from "./Input.module.css";

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

  const classNames = [
    styles.input,
    error && styles.error,
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.container}>
      {label && (
        <label
          htmlFor={inputId}
          className={styles.label}
        >
          {label}

          {required && (
            <span className={styles.required}>
              *
            </span>
          )}
        </label>
      )}

      <div className={styles.inputWrapper}>
        {leftIcon && (
          <span className={styles.leftIcon}>
            {leftIcon}
          </span>
        )}

        <input
          ref={ref}
          id={inputId}
          className={classNames}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${inputId}-error`
              : helperText
              ? `${inputId}-helper`
              : undefined
          }
          {...props}
        />

        {rightIcon && (
          <span className={styles.rightIcon}>
            {rightIcon}
          </span>
        )}
      </div>

      {error ? (
        <p
          id={`${inputId}-error`}
          className={styles.errorText}
        >
          {error}
        </p>
      ) : (
        helperText && (
          <p
            id={`${inputId}-helper`}
            className={styles.helperText}
          >
            {helperText}
          </p>
        )
      )}
    </div>
  );
});

export default Input;