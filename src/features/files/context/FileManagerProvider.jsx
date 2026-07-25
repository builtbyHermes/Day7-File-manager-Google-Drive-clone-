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
    fileManager.folders
  );

  const selection = useSelection();

  const search = useSearch(
    fileManager.currentFiles
  );

  const upload = useUpload();

  const contextMenu = useContextMenu();


  const value = {

    ...fileManager,

    ...navigation,

    ...selection,

    ...search,

    ...upload,

    ...contextMenu,

  };


  return (
    <FileManagerContext.Provider value={value}>
      {children}
    </FileManagerContext.Provider>
  );
}

export default FileManagerProvider;