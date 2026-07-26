import FileRow from "./FileRow";

function FileList({
  files = [],
  selectedItems = [],
  onOpen,
  onSelect,
  onContextMenu,
}) {
  return (
    <div className="file-list">
      <div
        className="file-row"
        style={{ fontWeight: "bold", backgroundColor: "var(--bg-sidebar)", color: "var(--text-muted)" }}
      >
        <div>Name</div>
        <div>Type</div>
        <div>Size</div>
        <div>Modified</div>
      </div>

      {files.map((file) => (
        <FileRow
          key={file.id}
          file={file}
          selected={selectedItems.includes(file.id)}
          onClick={() => onSelect?.(file)}
          onDoubleClick={() => onOpen?.(file)}
          onContextMenu={(e) => onContextMenu?.(e, file)}
        />
      ))}
    </div>
  );
}

export default FileList;