import SearchBar from "../../../components/SearchBar";
import styles from "./Header.module.css";

function Header({
  search,
  onSearchChange,
}) {
  return (
    <header className={styles.header}>

      {/* Left Section */}
      <div className={styles.logo}>
        FileManager
      </div>


      {/* Center Section */}
      <div className={styles.search}>
        <SearchBar
          value={search}
          onChange={onSearchChange}
          placeholder="Search files..."
        />
      </div>


      {/* Right Section */}
      <div className={styles.actions}>

        <button className={styles.actionButton}>
          🔄
        </button>

        <button className={styles.actionButton}>
          ⚙️
        </button>

        <button className={styles.actionButton}>
          🔔
        </button>

        <button className={styles.profile}>
          👤
        </button>

      </div>

    </header>
  );
}

export default Header;