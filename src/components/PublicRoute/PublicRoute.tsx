import useAuth from "@/hook/useAuth";
import React from "react";
import { Navigate } from "react-router-dom";
export interface PublicRouteInterface {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteInterface> = ({ children }) => {
  const { isAuthent } = useAuth();
  return isAuthent() ? <Navigate to="/dashboard" /> : <> {children} </>;
};

export default PublicRoute;
