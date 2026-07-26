import SidebarItem from "./SidebarItem";
import StorageProgress from "./StorageProgress";

import sidebarItems from "../../files/constants/sidebarItems";

// import styles from "./Sidebar.module.css";

function Sidebar({
  activeItem = "my-files",
  onSelect,
}) {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.navigation}>
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.id}
            onClick={() => onSelect?.(item.id)}
          />
        ))}
      </nav>

      <StorageProgress
        used={35}
        total={50}
      />
    </aside>
  );
}

export default Sidebar;