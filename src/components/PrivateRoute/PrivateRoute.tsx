import React from "react";
import { Navigate } from "react-router-dom";

export interface PrivateRouteInterface {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteInterface> = ({ children }) => {
  return <Navigate to="/" />;
};

export default PrivateRoute;
