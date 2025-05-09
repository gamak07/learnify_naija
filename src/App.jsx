import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import ContentManagement from "./pages/ContentManagement";
import Notifications from "./pages/Notifications";
import { NotificationDetails } from "./pages/NotificationDetails";
import NotificationView from "./pages/NotificationView";
import SupportCenter from "./pages/SupportCenter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} path="/" />
          <Route element={<UserManagement />} path="/user_management" />
          <Route element={<ContentManagement />} path="/content_management" />
          <Route element={<Notifications />} path="/notifications" />
          <Route element={<NotificationView />} path="/notification/001" />
          <Route element={<SupportCenter />} path="/support_center" />
        </Route>
        <Route element={<NotificationDetails />} path="/notification_details" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
