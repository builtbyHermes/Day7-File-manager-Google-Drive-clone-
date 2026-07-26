import { useState } from "react";

function FolderTreeItem({
  folder,
  level = 0,
  selectedId,
  onSelect,
}) {
  const [expanded, setExpanded] = useState(true);

  const hasChildren = folder.children && folder.children.length > 0;

  function handleToggle(e) {
    e.stopPropagation();
    if (hasChildren) {
      setExpanded((prev) => !prev);
    }
  }

  function handleSelect() {
    onSelect?.(folder);
  }

  const isSelected = selectedId === folder.id;

  return (
    <div>
      <div
        className={`sidebar-item ${isSelected ? "active" : ""}`}
        style={{
          paddingLeft: `${level * 12 + 8}px`,
          fontSize: "0.85rem",
          paddingTop: "0.4rem",
          paddingBottom: "0.4rem",
        }}
        onClick={handleSelect}
      >
        <button
          type="button"
          onClick={handleToggle}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            width: "16px",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
          }}
        >
          {hasChildren ? (expanded ? "▼" : "▶") : ""}
        </button>

        <span>📁</span>
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
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