// import styles from "./EmptyState.module.css";

function EmptyState({
  icon = "📂",
  title = "Nothing here",
  description = "There's nothing to display.",
  action,
  className = "",
  ...props
}) {
  const classNames = [
    styles.container,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classNames}
      {...props}
    >
      <div className={styles.icon}>
        {icon}
      </div>

      <h2 className={styles.title}>
        {title}
      </h2>

      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}

      {action && (
        <div className={styles.action}>
          {action}
        </div>
      )}
    </div>
  );
}

export default EmptyState;