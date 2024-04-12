import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthenticatedLayout({ children }) {
  const isLoggedIn = document.cookie.includes("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate, isLoggedIn]);

  return <>{children}</>;
}
