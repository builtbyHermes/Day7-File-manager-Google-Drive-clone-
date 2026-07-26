import { useState, useMemo } from "react";
import mockFiles from "../data/mockFiles";
import mockFolders from "../data/mockFolders";
import findFolder from "../utils/findFolder";
import generateId from "../utils/generateId";
import formatDate from "../utils/formatDate";
import formatFileSize from "../utils/formatFileSize";

function useFileManager() {
  const [files, setFiles] = useState(mockFiles);
  const [folders, setFolders] = useState(mockFolders);
  const [currentFolderId, setCurrentFolderId] = useState("root");
  const [activeTab, setActiveTab] = useState("drive");
  const [viewMode, setViewMode] = useState("grid");
  const [sortOption, setSortOption] = useState("name");

  // Current folder object
  const currentFolder = useMemo(() => {
    return findFolder(folders, currentFolderId) || folders[0];
  }, [folders, currentFolderId]);

  // Current subfolders inside current folder
  const currentSubfolders = useMemo(() => {
    if (!currentFolder || !currentFolder.children) return [];
    return currentFolder.children.map((sub) => ({
      id: sub.id,
      name: sub.name,
      parentId: sub.parentId,
      isFolder: true,
      size: "--",
      modified: "Folder",
      type: "folder",
    }));
  }, [currentFolder]);

  // Files in current folder or filtered by active tab
  const currentFiles = useMemo(() => {
    let filteredFiles = [];

    if (activeTab === "drive") {
      const folderFiles = files.filter((f) => f.parentId === currentFolderId);
      filteredFiles = [...currentSubfolders, ...folderFiles];
    } else if (activeTab === "recent") {
      filteredFiles = files.filter((f) => !f.isTrash);
    } else if (activeTab === "starred") {
      filteredFiles = files.filter((f) => f.isStarred && !f.isTrash);
    } else if (activeTab === "trash") {
      filteredFiles = files.filter((f) => f.isTrash);
    }

    return filteredFiles;
  }, [files, currentSubfolders, activeTab, currentFolderId]);

  // Navigate into folder
  function openFolder(folderId) {
    setCurrentFolderId(folderId);
    setActiveTab("drive");
  }

  // Go back to parent folder
  function goBack() {
    if (!currentFolder?.parentId) return;
    setCurrentFolderId(currentFolder.parentId);
  }

  // Create New Folder
  function createFolder(name) {
    const newFolderObj = {
      id: generateId("folder"),
      name,
      parentId: currentFolderId,
      children: [],
    };

    function addFolderToTree(tree) {
      return tree.map((node) => {
        if (node.id === currentFolderId) {
          return { ...node, children: [...(node.children || []), newFolderObj] };
        }
        if (node.children && node.children.length > 0) {
          return { ...node, children: addFolderToTree(node.children) };
        }
        return node;
      });
    }

    setFolders((prev) => addFolderToTree(prev));
  }

  // Rename File or Folder
  function renameItem(item, newName) {
    if (item.isFolder) {
      function renameInTree(tree) {
        return tree.map((node) => {
          if (node.id === item.id) {
            return { ...node, name: newName };
          }
          if (node.children && node.children.length > 0) {
            return { ...node, children: renameInTree(node.children) };
          }
          return node;
        });
      }
      setFolders((prev) => renameInTree(prev));
    } else {
      setFiles((prev) =>
        prev.map((f) => (f.id === item.id ? { ...f, name: newName } : f))
      );
    }
  }

  // Delete File or Folder
  function deleteItem(item) {
    if (item.isFolder) {
      function deleteFromTree(tree) {
        return tree
          .filter((node) => node.id !== item.id)
          .map((node) => ({
            ...node,
            children: node.children ? deleteFromTree(node.children) : [],
          }));
      }
      setFolders((prev) => deleteFromTree(prev));
    } else {
      setFiles((prev) => prev.filter((f) => f.id !== item.id));
    }
  }

  // Upload Files
  function uploadFiles(uploadedFiles) {
    const newFileEntries = uploadedFiles.map((file) => ({
      id: generateId("file"),
      name: file.name,
      type: file.name.split(".").pop() || "file",
      size: formatFileSize(file.size),
      modified: formatDate(new Date()),
      parentId: currentFolderId,
      isFolder: false,
    }));

    setFiles((prev) => [...prev, ...newFileEntries]);
  }

  return {
    files,
    folders,
    currentFolder,
    currentFiles,
    currentFolderId,
    setCurrentFolderId,
    activeTab,
    setActiveTab,
    viewMode,
    setViewMode,
    sortOption,
    setSortOption,
    openFolder,
    goBack,
    createFolder,
    renameItem,
    deleteItem,
    uploadFiles,
  };
}

export default useFileManager;