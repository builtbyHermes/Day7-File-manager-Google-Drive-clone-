import generateId from "../utils/generateId";

const fileService = {

  createFolder(name, parentId) {

    return {
      id: generateId("folder"),
      name,
      parentId,
      createdAt: new Date(),
    };

  },



  renameItem(item, newName) {

    return {
      ...item,
      name: newName,
    };

  },



  deleteItem(items, id) {

    return items.filter(
      item => item.id !== id
    );

  },



  moveItem(item, destinationFolderId) {

    return {
      ...item,
      parentId: destinationFolderId,
    };

  },



  uploadFiles(files) {

    return files.map(file => ({

      id: generateId("file"),

      ...file,

      uploadedAt: new Date(),

    }));

  }

};

export default fileService;