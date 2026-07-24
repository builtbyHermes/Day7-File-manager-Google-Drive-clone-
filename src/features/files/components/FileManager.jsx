import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Toolbar from "../components/Toolbar";
import Breadcrumbs from "../components/Breadcrumbs";
import FileExplorer from "../components/FileExplorer";
import StatusBar from "../components/StatusBar";

import styles from "./FileManager.module.css";

function FileManager() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.layout}>
        <Sidebar />

        <main className={styles.main}>
          <Toolbar />

          <Breadcrumbs />

          <FileExplorer />

          <StatusBar />
        </main>
      </div>
    </div>
  );
}

export default FileManager;