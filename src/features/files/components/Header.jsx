import SearchBar from "../../../components/SearchBar";
import useFileManagerContext from "../context/useFileManagerContext";

function Header() {
  const { searchQuery, setSearchQuery } = useFileManagerContext();

  return (
    <header className="app-header">
      {/* Left Section */}
      <div className="app-logo">
        <span style={{ fontSize: "1.5rem" }}>📁</span> Google Drive
      </div>

      {/* Center Section */}
      <div className="search-container">
        <SearchBar
          value={searchQuery}
          onChange={(val) => setSearchQuery(val)}
          placeholder="Search in Drive..."
        />
      </div>

      {/* Right Section */}
      <div className="header-actions">
        <button className="btn btn-secondary" title="Refresh" onClick={() => window.location.reload()}>
          🔄
        </button>
        <button className="btn btn-secondary" title="Settings">
          ⚙️
        </button>
        <button className="btn btn-secondary" title="Notifications">
          🔔
        </button>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "var(--primary)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          U
        </div>
      </div>
    </header>
  );
}

export default Header;