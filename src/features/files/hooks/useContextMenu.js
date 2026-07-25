import { useEffect, useState } from "react";

function useContextMenu() {
  const [contextMenu, setContextMenu] = useState({
    isOpen: false,
    x: 0,
    y: 0,
    item: null,
  });

  function openContextMenu(event, item) {
    event.preventDefault();

    setContextMenu({
      isOpen: true,
      x: event.clientX,
      y: event.clientY,
      item,
    });
  }

  function closeContextMenu() {
    setContextMenu((prev) => ({
      ...prev,
      isOpen: false,
      item: null,
    }));
  }

  useEffect(() => {
    if (!contextMenu.isOpen) return;

    function handleClick() {
      closeContextMenu();
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [contextMenu.isOpen]);

  return {
    contextMenu,
    openContextMenu,
    closeContextMenu,
  };
}

export default useContextMenu;