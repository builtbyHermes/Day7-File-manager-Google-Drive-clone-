function filterFiles(files, filters = {}) {
  if (!Array.isArray(files)) {
    return [];
  }

  return files.filter((file) => {

    // Filter by type
    if (
      filters.type &&
      file.type !== filters.type
    ) {
      return false;
    }


    // Filter folders only
    if (
      filters.isFolder !== undefined &&
      file.isFolder !== filters.isFolder
    ) {
      return false;
    }


    // Minimum size
    if (
      filters.minSize &&
      file.size < filters.minSize
    ) {
      return false;
    }


    // Maximum size
    if (
      filters.maxSize &&
      file.size > filters.maxSize
    ) {
      return false;
    }


    return true;
  });
}

export default filterFiles;