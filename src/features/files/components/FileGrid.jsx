import FileCard from "./FileCard";

function FileGrid({
  files = [],
  selectedItems = [],
  onOpen,
  onSelect,
  onContextMenu,
}) {
  return (
    <div className="file-grid">
      {files.map((file) => (
        <FileCard
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

export default FileGrid;