import { useState, useMemo } from "react";
import searchFiles from "../utils/searchFiles";

function useSearch(files = []) {
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = useMemo(() => {
    return searchFiles(files, searchQuery);
  }, [files, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
  };
}

export default useSearch;
