// import styles from "./Breadcrumbs.module.css";

function Breadcrumbs({
  items = [],
  onNavigate,
  className = "",
  ...props
}) {
  const classNames = [
    styles.breadcrumbs,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav
      className={classNames}
      aria-label="Breadcrumb"
      {...props}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={item.id}
            className={styles.item}
          >
            <button
              type="button"
              className={`${styles.link} ${
                isLast ? styles.active : ""
              }`}
              disabled={isLast}
              onClick={() => onNavigate?.(item.id)}
            >
              {item.label}
            </button>

            {!isLast && (
              <span className={styles.separator}>
                /
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;s