import FileRow from "./FileRow";

// import styles from "./FileList.module.css";

function FileList({
  files = [],
  selectedFiles = [],
  onOpen,
  onSelect,
  onContextMenu,
  className = "",
  ...props
}) {
  const classNames = [
    styles.list,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classNames}
      {...props}
    >
      {files.map((file) => (
        <FileRow
          key={file.id}
          file={file}
          selected={selectedFiles.includes(file.id)}
          onClick={() => onSelect?.(file)}
          onDoubleClick={() => onOpen?.(file)}
          onContextMenu={onContextMenu}
        />
      ))}
    </div>
  );
}

export default FileList;