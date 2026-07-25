function getFileIcon(file) {
  if (!file) {
    return "📄";
  }

  if (file.isFolder) {
    return "📁";
  }

  const type = file.type?.toLowerCase();

  switch (type) {
    case "pdf":
      return "📕";

    case "image":
    case "png":
    case "jpg":
    case "jpeg":
      return "🖼️";

    case "video":
    case "mp4":
    case "mov":
      return "🎬";

    case "audio":
    case "mp3":
    case "wav":
      return "🎵";

    case "zip":
    case "rar":
    case "archive":
      return "📦";

    case "document":
    case "doc":
    case "docx":
      return "📄";

    case "spreadsheet":
    case "xls":
    case "xlsx":
      return "📊";

    case "presentation":
    case "ppt":
    case "pptx":
      return "📑";

    case "code":
    case "js":
    case "jsx":
    case "html":
    case "css":
      return "💻";

    default:
      return "📄";
  }
}

export default getFileIcon;