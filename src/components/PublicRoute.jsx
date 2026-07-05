import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  let currentUser = null;
  try {
    const stored = localStorage.getItem("currentUser");
    currentUser = stored ? JSON.parse(stored) : null;
  } catch {
    localStorage.removeItem("currentUser");
  }

  if (currentUser) {
    // User is already logged in, redirect to their corresponding dashboard
    if (currentUser.role === "admin") {
      return <Navigate to="/adminhome" replace />;
    } else {
      return <Navigate to="/home" replace />;
    }
  }

  return children;
}

export default PublicRoute;
