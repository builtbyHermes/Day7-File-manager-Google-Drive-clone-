import styles from "./FileCard.module.css";

function FileCard({
  file,
  selected = false,
  onClick,
  onDoubleClick,
  onContextMenu,
  className = "",
  ...props
}) {
  const classNames = [
    styles.card,
    selected && styles.selected,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const icon = file.isFolder ? "📁" : "📄";

  return (
    <div
      className={classNames}
      onClick={() => onClick?.(file)}
      onDoubleClick={() => onDoubleClick?.(file)}
      onContextMenu={(e) => {
        e.preventDefault();
        onContextMenu?.(e, file);
      }}
      {...props}
    >
      <div className={styles.icon}>
        {icon}
      </div>

      <h3 className={styles.name}>
        {file.name}
      </h3>

      <div className={styles.meta}>
        <span>{file.size}</span>
        <span>{file.modified}</span>
      </div>
    </div>
  );
}

export default FileCard;