import styles from "./FileRow.module.css";

function FileRow({
  file,
  selected = false,
  onClick,
  onDoubleClick,
  onContextMenu,
  className = "",
  ...props
}) {
  const classNames = [
    styles.row,
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
      <div className={styles.name}>
        <span className={styles.icon}>{icon}</span>
        <span>{file.name}</span>
      </div>

      <div className={styles.type}>
        {file.isFolder ? "Folder" : file.type}
      </div>

      <div className={styles.size}>
        {file.isFolder ? "--" : file.size}
      </div>

      <div className={styles.modified}>
        {file.modified}
      </div>
    </div>
  );
}

export default FileRow;