import FileCard from "../FileCard";
import styles from "./FileGrid.module.css";

function FileGrid({
  files = [],
  onOpen,
  onSelect,
  className = "",
  ...props
}) {
  const classNames = [
    styles.grid,
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
        <FileCard
          key={file.id}
          file={file}
          onOpen={() => onOpen?.(file)}
          onSelect={() => onSelect?.(file)}
        />
      ))}
    </div>
  );
}

export default FileGrid;