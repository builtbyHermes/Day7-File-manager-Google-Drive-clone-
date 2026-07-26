import SidebarItem from "./SidebarItem";
import StorageProgress from "./StorageProgress";
import FolderTree from "./FolderTree";
import sidebarItems from "../constants/sidebarItems";
import useFileManagerContext from "../context/useFileManagerContext";

function Sidebar() {
  const {
    activeTab,
    setActiveTab,
    folders,
    currentFolderId,
    openFolder,
    openCreateFolderModal,
  } = useFileManagerContext();

  return (
    <aside className="app-sidebar">
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <button className="btn btn-primary" onClick={openCreateFolderModal} style={{ width: "100%", padding: "0.75rem" }}>
          + New Folder
        </button>

        <nav className="sidebar-nav">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon === "folder" ? "📁" : item.icon === "clock" ? "🕒" : item.icon === "star" ? "⭐" : "🗑️"}
              label={item.label}
              active={activeTab === item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (item.id === "drive") {
                  openFolder("root");
                }
              }}
            />
          ))}
        </nav>

        <div style={{ marginTop: "1rem" }}>
          <h4 style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem", paddingLeft: "0.5rem" }}>
            FOLDERS
          </h4>
          <FolderTree
            folders={folders}
            selectedId={currentFolderId}
            onSelect={(folder) => openFolder(folder.id)}
          />
        </div>
      </div>

      <StorageProgress used={3.5} total={15} />
    </aside>
  );
}

export default Sidebar;