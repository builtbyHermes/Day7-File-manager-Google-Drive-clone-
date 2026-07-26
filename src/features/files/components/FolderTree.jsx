import FolderTreeItem from "./FolderTreeItem";

function FolderTree({
  folders = [],
  selectedId,
  onSelect,
  className = "",
  ...props
}) {
  return (
    <div className={`folder-tree ${className}`} {...props}>
      {folders.map((folder) => (
        <FolderTreeItem
          key={folder.id}
          folder={folder}
          level={0}
          selectedId={selectedId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default FolderTree;