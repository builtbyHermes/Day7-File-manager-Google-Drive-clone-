import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";

import styles from "./Toolbar.module.css";

const sortOptions = [
  { value: "name", label: "Name" },
  { value: "date", label: "Date" },
  { value: "size", label: "Size" },
];

function Toolbar({
  view = "grid",
  sort = "name",
  onUpload,
  onCreateFolder,
  onViewChange,
  onSortChange,
}) {
  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>
        <Button onClick={onUpload}>
          Upload
        </Button>

        <Button
          variant="secondary"
          onClick={onCreateFolder}
        >
          New Folder
        </Button>
      </div>

      <div className={styles.right}>
        <Button
          variant={view === "grid" ? "primary" : "secondary"}
          onClick={() => onViewChange?.("grid")}
        >
          Grid
        </Button>

        <Button
          variant={view === "list" ? "primary" : "secondary"}
          onClick={() => onViewChange?.("list")}
        >
          List
        </Button>

        <Dropdown
          options={sortOptions}
          value={sort}
          onChange={onSortChange}
        />
      </div>
    </div>
  );
}

export default Toolbar;