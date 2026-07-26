function SidebarItem({
  icon,
  label,
  active = false,
  disabled = false,
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
      type="button"
      className={`sidebar-item ${active ? "active" : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className="sidebar-icon">{icon}</span>
      <span className="sidebar-label">{label}</span>
    </button>
  );
}

export default SidebarItem;