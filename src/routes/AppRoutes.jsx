import { Routes, Route } from "react-router-dom";

import FileManagerPage from "../features/files/pages/FileManager";


function AppRoutes(){

  return (
    <Routes>

      <Route
        path="/files"
        element={<FileManagerPage />}
      />

    </Routes>
  );

}


export default AppRoutes;