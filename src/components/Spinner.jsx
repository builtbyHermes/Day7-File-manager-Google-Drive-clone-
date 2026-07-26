function Spinner({
  size = "md",
  className = "",
  ...props
}) {
  return (
    <span
      className={`spinner spinner-${size} ${className}`}
      role="status"
      aria-label="Loading"
      style={{
        display: "inline-block",
        width: size === "sm" ? "14px" : "20px",
        height: size === "sm" ? "14px" : "20px",
        border: "2px solid var(--border-color)",
        borderTopColor: "var(--primary)",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}
      {...props}
    >
      <span style={{ display: "none" }}>Loading...</span>
    </span>
  );
}

export default Spinner;