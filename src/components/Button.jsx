import Spinner from "./Spinner";

function Button({
  children,
  size = "md",
  variant = "primary",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  type = "button",
  onClick,
  className = "",
  ...props
}) {
  const classNames = [
    "btn",
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? "full-width" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled || loading}
      aria-busy={loading}
      onClick={onClick}
      {...props}
    >
      {!loading && leftIcon && <span className="btn-icon-left">{leftIcon}</span>}

      {loading ? (
        <>
          <Spinner size="sm" />
          <span>{children}</span>
        </>
      ) : (
        <span>{children}</span>
      )}

      {!loading && rightIcon && <span className="btn-icon-right">{rightIcon}</span>}
    </button>
  );
}

export default Button;