import React from "react";
import "./styles/Loader.css";

interface LoaderProps {
  color?: string;
}
const Loader: React.FC<LoaderProps> = ({ color = "white" }) => {
  return <div className="loader" style={{ borderColor: color }} />;
};

export default Loader;
