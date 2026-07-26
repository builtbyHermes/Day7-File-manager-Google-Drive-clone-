import { useMemo } from "react";
import findFolder from "../utils/findFolder";

function useNavigation(folders = [], currentFolderId = "root", openFolder) {
  const breadcrumbs = useMemo(() => {
    const path = [];
    let current = findFolder(folders, currentFolderId);

    while (current) {
      path.unshift({
        id: current.id,
        name: current.name,
      });

      if (!current.parentId) break;
      current = findFolder(folders, current.parentId);
    }

    return path;
  }, [folders, currentFolderId]);

  return {
    breadcrumbs,
    navigateToFolder: openFolder,
  };
}

export default useNavigation;