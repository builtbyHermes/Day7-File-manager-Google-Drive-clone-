import EmptyState from "../../../components/EmptyState";
import FileGrid from "./FileGrid";
import FileList from "./FileList";
import useFileManagerContext from "../context/useFileManagerContext";
import sortFiles from "../utils/sortFiles";

function FileExplorer() {
  const {
    searchResults,
    viewMode,
    sortOption,
    openFolder,
    selectedItems,
    toggleSelection,
    openContextMenu,
    openCreateFolderModal,
  } = useFileManagerContext();

  const sortedFiles = sortFiles(searchResults, sortOption);

  if (sortedFiles.length === 0) {
    return (
      <div className="explorer-container">
        <EmptyState
          icon="📂"
          title="Folder is empty"
          description="Upload your first file or create a new folder."
          action={
            <button className="btn btn-primary" onClick={openCreateFolderModal}>
              Create Folder
            </button>
          }
        />
      </div>
    );
  }

  return (
    <div className="explorer-container">
      {viewMode === "grid" ? (
        <FileGrid
          files={sortedFiles}
          selectedItems={selectedItems}
          onOpen={(item) => {
            if (item.isFolder) {
              openFolder(item.id);
            }
          }}
          onSelect={(item) => toggleSelection(item.id)}
          onContextMenu={(e, item) => openContextMenu(e, item)}
        />
      ) : (
        <FileList
          files={sortedFiles}
          selectedItems={selectedItems}
          onOpen={(item) => {
            if (item.isFolder) {
              openFolder(item.id);
            }
          }}
          onSelect={(item) => toggleSelection(item.id)}
          onContextMenu={(e, item) => openContextMenu(e, item)}
        />
      )}
    </div>
  );
}

export default FileExplorer;