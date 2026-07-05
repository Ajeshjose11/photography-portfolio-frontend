import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  let currentUser = null;
  try {
    const stored = localStorage.getItem("currentUser");
    currentUser = stored ? JSON.parse(stored) : null;
  } catch {
    localStorage.removeItem("currentUser");
  }

  if (!currentUser) {
    // User is not logged in, redirect to login page
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(currentUser.role)) {
    // User is logged in but does not have the required role.
    // Redirect them to their own home page.
    if (currentUser.role === "admin") {
      return <Navigate to="/adminhome" replace />;
    } else {
      return <Navigate to="/home" replace />;
    }
  }

  return children;
}

export default ProtectedRoute;
