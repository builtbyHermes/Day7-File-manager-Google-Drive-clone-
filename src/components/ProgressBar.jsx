// import styles from "./ProgressBar.module.css";

function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = false,
  color = "primary",
  className = "",
  ...props
}) {
  const percentage = Math.min(
    Math.max((value / max) * 100, 0),
    100
  );

  const classNames = [
    styles.container,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const fillClassNames = [
    styles.fill,
    styles[color] || styles.primary,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...props}>
      {(label || showValue) && (
        <div className={styles.header}>
          {label && (
            <span className={styles.label}>
              {label}
            </span>
          )}

          {showValue && (
            <span className={styles.value}>
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      <div
        className={styles.track}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className={fillClassNames}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;