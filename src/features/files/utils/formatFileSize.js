function formatFileSize(bytes) {

  if (typeof bytes !== "number" || bytes < 0) {
    return "0 Bytes";
  }

  if (bytes === 0) {
    return "0 Bytes";
  }

  const units = [
    "Bytes",
    "KB",
    "MB",
    "GB",
    "TB",
  ];

  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  const formattedSize =
    unitIndex === 0
      ? size
      : Number(size.toFixed(2));

  return `${formattedSize} ${units[unitIndex]}`;
}

export default formatFileSize;