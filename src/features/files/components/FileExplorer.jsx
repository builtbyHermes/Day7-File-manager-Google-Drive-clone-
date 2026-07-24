import EmptyState from "../../../components/EmptyState";

import FileGrid from "../FileGrid";
import FileList from "../FileList";

import styles from "./FileExplorer.module.css";

function FileExplorer({
  files = [],
  view = "grid",
  ...props
}) {
  if (files.length === 0) {
    return (
      <div className={styles.container}>
        <EmptyState
          icon="📂"
          title="Folder is empty"
          description="Upload your first file."
        />
      </div>
    );
  }

  return (
    <div
      className={styles.container}
      {...props}
    >
      {view === "grid" ? (
        <FileGrid files={files} />
      ) : (
        <FileList files={files} />
      )}
    </div>
  );
}

export default FileExplorer;