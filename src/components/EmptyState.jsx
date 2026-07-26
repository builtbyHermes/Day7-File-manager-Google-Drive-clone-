function EmptyState({
  icon = "📂",
  title = "Nothing here",
  description = "There's nothing to display.",
  action,
  className = "",
  ...props
}) {
  return (
    <div
      className={`empty-state ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1.5rem",
        textAlign: "center",
        color: "var(--text-muted)",
      }}
      {...props}
    >
      <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{icon}</div>
      <h2 style={{ fontSize: "1.25rem", color: "var(--text-main)", marginBottom: "0.5rem" }}>
        {title}
      </h2>
      {description && <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>{description}</p>}
      {action && <div>{action}</div>}
    </div>
  );
}

export default EmptyState;