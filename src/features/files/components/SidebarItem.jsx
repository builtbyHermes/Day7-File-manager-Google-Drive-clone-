import styles from "./SidebarItem.module.css";

function SidebarItem({
  icon,
  label,
  active = false,
  disabled = false,
  onClick,
  className = "",
  ...props
}) {
  const classNames = [
    styles.item,
    active && styles.active,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  function handleClick() {
    if (disabled) return;

    onClick?.();
  }

  return (
    <button
      type="button"
      className={classNames}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      <span className={styles.icon}>
        {icon}
      </span>

      <span className={styles.label}>
        {label}
      </span>
    </button>
  );
}

export default SidebarItem;