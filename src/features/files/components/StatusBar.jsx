import useFileManagerContext from "../context/useFileManagerContext";

function StatusBar() {
  const { currentFiles, selectedItems, viewMode } = useFileManagerContext();

  const totalItems = currentFiles.length;
  const selectedCount = selectedItems.length;

  return (
    <footer className="status-bar">
      <span>
        {totalItems} item{totalItems !== 1 ? "s" : ""}
      </span>

      <span>{selectedCount} selected</span>

      <span>{viewMode === "grid" ? "Grid View" : "List View"}</span>
    </footer>
  );
}

export default StatusBar;