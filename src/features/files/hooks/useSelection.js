import { useState } from "react";


function useSelection() {

  const [selectedItems, setSelectedItems] = useState([]);


  // Select or deselect one item
  function toggleSelection(id) {

    setSelectedItems((current) => {
      
      //if it already exists deselect it
      if (current.includes(id)) {
        return current.filter(
          (itemId) => itemId !== id
        );
      }
      
      //else add the new id to the existing selectedItems
      return [
        ...current,
        id
      ];

    });

  }


  // Check if item is selected
  function isSelected(id) {

    return selectedItems.includes(id);

  }


  // Select multiple items
  function selectAll(ids) {

    setSelectedItems(ids);

  }


  // Remove everything
  function clearSelection() {

    setSelectedItems([]);

  }


  return {

    selectedItems,

    toggleSelection,

    isSelected,

    selectAll,

    clearSelection,

  };

}


export default useSelection;