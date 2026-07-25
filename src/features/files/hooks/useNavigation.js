import { useState } from "react";


function useNavigation(folders = []) {

  const [currentFolderId, setCurrentFolderId] =
    useState("root");


  function navigateToFolder(folderId) {
    setCurrentFolderId(folderId);
  }


  function goBack() {

    const currentFolder = folders.find(
      (folder) => folder.id === currentFolderId
    );


    if (
      !currentFolder ||
      !currentFolder.parentId
    ) {
      return;
    }


    setCurrentFolderId(
      currentFolder.parentId
    );

  }


  function getBreadcrumbs() {

    const path = [];

    let current =
      folders.find(
        folder => folder.id === currentFolderId
      );


    while (current) {

      path.unshift(current);


      current =
        folders.find(
          folder =>
            folder.id === current.parentId
        );

    }


    return path;

  }


  return {

    currentFolderId,

    navigateToFolder,

    goBack,

    breadcrumbs: getBreadcrumbs(),

  };

}


export default useNavigation;