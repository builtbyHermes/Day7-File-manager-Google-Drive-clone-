import ProgressBar from "../../../components/ProgressBar";

function StorageProgress({ used = 3.5, total = 15, className = "" }) {
  const percentage = Math.min((used / total) * 100, 100);

  return (
    <section className={`storage-box ${className}`}>
      <h4 style={{ fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "600" }}>
        Storage
      </h4>

      <ProgressBar value={percentage} />

      <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
        {used} GB of {total} GB used
      </p>
    </section>
  );
}

export default StorageProgress;