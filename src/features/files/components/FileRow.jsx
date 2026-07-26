import getFileIcon from "../utils/getFileIcon";

function FileRow({
  file,
  selected = false,
  onClick,
  onDoubleClick,
  onContextMenu,
  className = "",
  ...props
}) {
  const icon = getFileIcon(file);

  return (
    <div
      className={`file-row ${selected ? "selected" : ""} ${className}`}
      onClick={() => onClick?.(file)}
      onDoubleClick={() => onDoubleClick?.(file)}
      onContextMenu={(e) => {
        e.preventDefault();
        onContextMenu?.(e, file);
      }}
      {...props}
    >
      <div className="file-row-name">
        <span className="file-row-icon">{icon}</span>
        <span>{file.name}</span>
      </div>

      <div className="file-row-meta">
        {file.isFolder ? "Folder" : file.type ? file.type.toUpperCase() : "File"}
      </div>

      <div className="file-row-meta">
        {file.isFolder ? "--" : file.size}
      </div>

      <div className="file-row-meta">
        {file.modified}
      </div>
    </div>
  );
}

export default FileRow;