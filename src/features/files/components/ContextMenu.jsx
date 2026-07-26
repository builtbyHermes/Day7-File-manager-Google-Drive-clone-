import React from "react";
import contextMenuItems from "../constants/contextMenuItems";

function ContextMenu({ isOpen, x, y, item, onClose, onAction }) {
  if (!isOpen || !item) return null;

  return (
    <div
      className="context-menu"
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {contextMenuItems.map((menuItem) => (
        <button
          key={menuItem.id}
          className="context-menu-item"
          onClick={() => {
            onAction?.(menuItem.id, item);
            onClose?.();
          }}
        >
          {menuItem.label}
        </button>
      ))}
    </div>
  );
}

export default ContextMenu;
