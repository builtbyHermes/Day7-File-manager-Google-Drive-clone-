function findFolder(folders, id) {
  for (const folder of folders) {

    if (folder.id === id) {
      return folder;
    }

    if (folder.children?.length) {
      const found = findFolder(
        folder.children,
        id
      );

      if (found) {
        return found;
      }
    }
  }

  return null;
}

export default findFolder;