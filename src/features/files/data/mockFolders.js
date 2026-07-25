const mockFolders = [
  {
    id: "root",
    name: "My Drive",
    parentId: null,
    children: [
      {
        id: "documents",
        name: "Documents",
        parentId: "root",
        children: [
          {
            id: "work",
            name: "Work",
            parentId: "documents",
            children: [],
          },
          {
            id: "personal",
            name: "Personal",
            parentId: "documents",
            children: [],
          },
        ],
      },
      {
        id: "pictures",
        name: "Pictures",
        parentId: "root",
        children: [],
      },
      {
        id: "downloads",
        name: "Downloads",
        parentId: "root",
        children: [],
      },
    ],
  },
];

export default mockFolders;