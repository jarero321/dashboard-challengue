import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "@/hook/useAuth";

export interface PrivateRouteInterface {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteInterface> = ({ children }) => {
  const { isAuthent } = useAuth();
  return isAuthent() ? <> {children} </> : <Navigate to="/" />;
};

export default PrivateRoute;
