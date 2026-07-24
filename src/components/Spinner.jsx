import styles from "./Spinner.module.css";

function Spinner({
  size = "md",
  className = "",
  ...props
}) {
  const classNames = [
    styles.spinner,
    styles[size] || styles.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={classNames}
      role="status"
      aria-label="Loading"
      {...props}
    >
      <span className={styles.srOnly}>Loading...</span>
    </span>
  );
}

export default Spinner;