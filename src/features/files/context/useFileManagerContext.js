import { useContext } from "react";
import FileManagerContext from "./FileManagerContext";

function useFileManagerContext() {
  const context = useContext(FileManagerContext);

  if (!context) {
    throw new Error(
      "useFileManagerContext must be used inside a FileManagerProvider"
    );
  }

  return context;
}

export default useFileManagerContext;