import { useState } from "react";
import styles from "./FolderTreeItem.module.css";

function FolderTreeItem({
  folder,
  level = 0,
  selectedId,
  onSelect,
}) {
  const [expanded, setExpanded] = useState(true);

  const hasChildren =
    folder.children && folder.children.length > 0;

  function handleToggle(e) {
    e.stopPropagation();

    if (hasChildren) {
      setExpanded((prev) => !prev);
    }
  }

  function handleSelect() {
    onSelect?.(folder);
  }

  return (
    <div>
      <div
        className={`${styles.item} ${
          selectedId === folder.id ? styles.selected : ""
        }`}
        style={{
          paddingLeft: `${level * 20 + 12}px`,
        }}
        onClick={handleSelect}
      >
        <button
          type="button"
          className={styles.toggle}
          onClick={handleToggle}
        >
          {hasChildren ? (expanded ? "▼" : "▶") : ""}
        </button>

        <span className={styles.icon}>📁</span>

        <span className={styles.label}>
          {folder.name}
        </span>
      </div>

      {expanded &&
        hasChildren &&
        folder.children.map((child) => (
          <FolderTreeItem
            key={child.id}
            folder={child}
            level={level + 1}
            selectedId={selectedId}
            onSelect={onSelect}
          />
        ))}
    </div>
  );
}

export default FolderTreeItem;