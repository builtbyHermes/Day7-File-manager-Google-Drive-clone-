import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import sortOptions from "../constants/sortOptions";
import useFileManagerContext from "../context/useFileManagerContext";

function Toolbar() {
  const {
    viewMode,
    setViewMode,
    sortOption,
    setSortOption,
    openUploadModal,
    openCreateFolderModal,
  } = useFileManagerContext();

  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <Button onClick={openUploadModal} variant="primary">
          📤 Upload Files
        </Button>

        <Button variant="secondary" onClick={openCreateFolderModal}>
          📁 New Folder
        </Button>
      </div>

      <div className="toolbar-right">
        <Button
          variant={viewMode === "grid" ? "primary" : "secondary"}
          onClick={() => setViewMode("grid")}
          title="Grid View"
        >
          田 Grid
        </Button>

        <Button
          variant={viewMode === "list" ? "primary" : "secondary"}
          onClick={() => setViewMode("list")}
          title="List View"
        >
          ☰ List
        </Button>

        <Dropdown
          options={sortOptions}
          value={sortOption}
          onChange={(val) => setSortOption(val)}
        />
      </div>
    </div>
  );
}

export default Toolbar;