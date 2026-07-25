import FileManagerProvider from "../context/FileManagerProvider";
import FileManager from "../components/FileManager";


function FileManagerPage() {

  return (
    <FileManagerProvider>
      <FileManager />
    </FileManagerProvider>
  );

}


export default FileManagerPage;