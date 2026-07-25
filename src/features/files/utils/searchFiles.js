function searchFiles(files, query) {
  if (!query || !query.trim()) {
    return files;
  }

  const searchTerm = query
    .toLowerCase()
    .trim();

  return files.filter((file) =>
    file.name
      .toLowerCase()
      .includes(searchTerm)
  );
}

export default searchFiles;