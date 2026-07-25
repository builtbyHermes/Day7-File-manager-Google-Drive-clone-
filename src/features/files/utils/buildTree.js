function buildTree(items) {
  const map = {};

  const tree = [];


  // Step 1: Create a map of every folder
  items.forEach((item) => {
    map[item.id] = {
      ...item,
      children: [],
    };
  });


  // Step 2: Connect children to parents
  items.forEach((item) => {

    if (item.parentId === null) {
      // Root folder
      tree.push(map[item.id]);
    } 
    else {
      const parent = map[item.parentId];

      if (parent) {
        parent.children.push(map[item.id]);
      }
    }

  });


  return tree;
}


export default buildTree;