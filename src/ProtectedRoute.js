import React from "react";
import { Route, Navigate } from "react-router-dom";
import firebase from "./firebase";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = firebase.auth().currentUser;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default ProtectedRoute;
