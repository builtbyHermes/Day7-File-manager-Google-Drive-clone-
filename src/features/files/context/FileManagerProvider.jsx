import { useState } from "react";
import FileManagerContext from "./FileManagerContext";

import useFileManager from "../hooks/useFileManager";
import useNavigation from "../hooks/useNavigation";
import useSelection from "../hooks/useSelection";
import useSearch from "../hooks/useSearch";
import useUpload from "../hooks/useUpload";
import useContextMenu from "../hooks/useContextMenu";

function FileManagerProvider({ children }) {
  const fileManager = useFileManager();

  const navigation = useNavigation(
    fileManager.folders,
    fileManager.currentFolderId,
    fileManager.openFolder
  );

  const selection = useSelection();

  const search = useSearch(fileManager.currentFiles);

  const upload = useUpload();

  const contextMenu = useContextMenu();

  // Dialog & Modal States
  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false);
  const [isRenameOpen, setIsRenameOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [targetItem, setTargetItem] = useState(null);

  function openCreateFolderModal() {
    setIsCreateFolderOpen(true);
  }

  function closeCreateFolderModal() {
    setIsCreateFolderOpen(false);
  }

  function openRenameModal(item) {
    setTargetItem(item);
    setIsRenameOpen(true);
  }

  function closeRenameModal() {
    setIsRenameOpen(false);
    setTargetItem(null);
  }

  function openDeleteModal(item) {
    setTargetItem(item);
    setIsDeleteOpen(true);
  }

  function closeDeleteModal() {
    setIsDeleteOpen(false);
    setTargetItem(null);
  }

  function openUploadModal() {
    setIsUploadOpen(true);
  }

  function closeUploadModal() {
    setIsUploadOpen(false);
  }

  const value = {
    ...fileManager,
    ...navigation,
    ...selection,
    ...search,
    ...upload,
    ...contextMenu,

    isCreateFolderOpen,
    openCreateFolderModal,
    closeCreateFolderModal,

    isRenameOpen,
    openRenameModal,
    closeRenameModal,

    isDeleteOpen,
    openDeleteModal,
    closeDeleteModal,

    isUploadOpen,
    openUploadModal,
    closeUploadModal,

    targetItem,
  };

  return (
    <FileManagerContext.Provider value={value}>
      {children}
    </FileManagerContext.Provider>
  );
}

export default FileManagerProvider;