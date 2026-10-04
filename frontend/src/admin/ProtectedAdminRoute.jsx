import { Navigate } from "react-router-dom";

function ProtectedAdminRoute({ children }) {
  const isAdminLoggedIn = localStorage.getItem("digitalinapp_admin_token");

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}

export default ProtectedAdminRoute;