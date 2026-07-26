import { Routes, Route, Navigate } from "react-router-dom";

import FileManagerPage from "../features/files/pages/FileManagerPage";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/files" replace />}
      />

      <Route
        path="/files"
        element={<FileManagerPage />}
      />
    </Routes>
  );
}

export default AppRoutes;