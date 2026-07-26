// import styles from "./StatusBar.module.css";

function StatusBar({
  totalItems = 0,
  selectedItems = 0,
  viewMode = "grid",
  className = "",
  ...props
}) {
  const classNames = [
    styles.statusBar,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <footer
      className={classNames}
      {...props}
    >
      <span>{totalItems} item{totalItems !== 1 ? "s" : ""}</span>

      <span>
        {selectedItems} selected
      </span>

      <span>
        {viewMode === "grid"
          ? "Grid View"
          : "List View"}
      </span>
    </footer>
  );
}

export default StatusBar;