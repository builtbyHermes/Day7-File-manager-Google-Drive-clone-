import { useState } from "react";

import mockFiles from "../data/mockFiles";
import mockFolders from "../data/mockFolders";

import findFolder from "../utils/findFolder";


function useFileManager() {

  const [files, setFiles] = useState(mockFiles);

  const [folders, setFolders] = useState(mockFolders);

  const [currentFolderId, setCurrentFolderId] = useState("root");


  // Current folder object
  const currentFolder = findFolder(
    folders,
    currentFolderId
  );


  // Files inside current folder
  const currentFiles = files.filter(
    (file) =>
      file.parentId === currentFolderId
  );


  // Navigate into folder
  function openFolder(folderId) {
    setCurrentFolderId(folderId);
  }


  // Go back
  function goBack() {

    if (!currentFolder?.parentId) {
      return;
    }

    setCurrentFolderId(
      currentFolder.parentId
    );
  }


  return {

    files,
    folders,

    currentFolder,
    currentFiles,

    currentFolderId,

    openFolder,
    goBack,

  };
}


export default useFileManager;