import Header from "./Header";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Breadcrumbs from "./Breadcrumbs";
import FileExplorer from "./FileExplorer";
import StatusBar from "./StatusBar";
import ContextMenu from "./ContextMenu";
import CreateFolderModal from "./CreateFolderModal";
import RenameModal from "./RenameModal";
import DeleteDialog from "./DeleteDialog";
import UploadModal from "./UploadModal";
import useFileManagerContext from "../context/useFileManagerContext";

function FileManager() {
  const {
    contextMenu,
    closeContextMenu,
    openFolder,
    createFolder,
    renameItem,
    deleteItem,
    uploadFiles,
    isCreateFolderOpen,
    closeCreateFolderModal,
    isRenameOpen,
    closeRenameModal,
    isDeleteOpen,
    closeDeleteModal,
    isUploadOpen,
    closeUploadModal,
    targetItem,
    openRenameModal,
    openDeleteModal,
  } = useFileManagerContext();

  function handleContextMenuAction(actionId, item) {
    if (actionId === "open") {
      if (item.isFolder) openFolder(item.id);
    } else if (actionId === "rename") {
      openRenameModal(item);
    } else if (actionId === "delete") {
      openDeleteModal(item);
    }
  }

  return (
    <div className="app-container" onClick={closeContextMenu}>
      <Header />

      <div className="app-body">
        <Sidebar />

        <main className="app-main">
          <Toolbar />

          <Breadcrumbs />

          <FileExplorer />

          <StatusBar />
        </main>
      </div>

      <ContextMenu
        isOpen={contextMenu.isOpen}
        x={contextMenu.x}
        y={contextMenu.y}
        item={contextMenu.item}
        onClose={closeContextMenu}
        onAction={handleContextMenuAction}
      />

      <CreateFolderModal
        isOpen={isCreateFolderOpen}
        onClose={closeCreateFolderModal}
        onCreate={(name) => createFolder(name)}
      />

      <RenameModal
        isOpen={isRenameOpen}
        file={targetItem}
        onClose={closeRenameModal}
        onRename={(item, newName) => renameItem(item, newName)}
      />

      <DeleteDialog
        isOpen={isDeleteOpen}
        file={targetItem}
        onClose={closeDeleteModal}
        onDelete={(item) => deleteItem(item)}
      />

      <UploadModal
        isOpen={isUploadOpen}
        onClose={closeUploadModal}
        onUpload={(files) => uploadFiles(files)}
      />
    </div>
  );
}

export default FileManager;