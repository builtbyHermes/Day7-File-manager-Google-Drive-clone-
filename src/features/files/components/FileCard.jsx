import getFileIcon from "../utils/getFileIcon";

function FileCard({
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
      className={`file-card ${selected ? "selected" : ""} ${className}`}
      onClick={() => onClick?.(file)}
      onDoubleClick={() => onDoubleClick?.(file)}
      onContextMenu={(e) => {
        e.preventDefault();
        onContextMenu?.(e, file);
      }}
      {...props}
    >
      <div className="file-card-icon">{icon}</div>

      <h3 className="file-card-name" title={file.name}>
        {file.name}
      </h3>

      <div className="file-card-meta">
        <span>{file.isFolder ? "Folder" : file.size}</span>
        <span>{file.modified}</span>
      </div>
    </div>
  );
}

export default FileCard;