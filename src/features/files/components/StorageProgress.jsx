import ProgressBar from "../../../components/ProgressBar";
import styles from "./StorageProgress.module.css";

function StorageProgress({
  used = 0,
  total = 1,
  className = "",
  ...props
}) {
  const percentage = Math.min((used / total) * 100, 100);

  const classNames = [
    styles.container,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={classNames}
      {...props}
    >
      <h3 className={styles.title}>
        Storage
      </h3>

      <ProgressBar value={percentage} />

      <p className={styles.info}>
        {used} GB / {total} GB Used
      </p>
    </section>
  );
}

export default StorageProgress;