function sortFiles(files, sortBy = "name", order = "asc") {
  if (!Array.isArray(files)) {
    return [];
  }

  const sortedFiles = [...files];

  sortedFiles.sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case "name":
        comparison = a.name.localeCompare(b.name);
        break;


      case "size":
        comparison = a.size - b.size;
        break;


      case "date":
        comparison =
          new Date(a.modified) -
          new Date(b.modified);
        break;


      case "type":
        comparison = a.type.localeCompare(b.type);
        break;


      default:
        comparison = 0;
    }

    return order === "asc"
      ? comparison
      : -comparison;
  });

  return sortedFiles;
}

export default sortFiles;