import FolderTreeItem from "./FolderTreeItem";
// import styles from "./FolderTree.module.css";

function FolderTree({
  folders = [],
  selectedId,
  onSelect,
  className = "",
  ...props
}) {
  const classNames = [
    styles.tree,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classNames}
      {...props}
    >
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