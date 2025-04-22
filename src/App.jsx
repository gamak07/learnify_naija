import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import ContentManagement from "./pages/ContentManagement";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} path="/" />
          <Route element={<UserManagement />} path="/user_management" />
          <Route element={<ContentManagement />} path="/content_management" />
          <Route element={<Notifications />} path="/notifications" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
