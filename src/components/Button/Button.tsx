import React from "react";
import { Loader } from "@/components/Loader";
export interface ButtonInterface {
  text: string;
  type: "submit" | "button";
  onClick?(): void;
  width?: string;
  height?: string;
  loader?: boolean;
}

const Button: React.FC<ButtonInterface> = ({
  text,
  type,
  onClick,
  width,
  height,
  loader,
}) => {
  return (
    <button
      disabled={loader}
      onClick={() => (onClick ? onClick() : () => null)}
      type={type}
      className={`w-full h-[40px] bg-black text-white font-semibold rounded-[6px] ${
        height ?? height
      } ${width ?? ""}`}
    >
      {loader ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <> {text} </>
      )}
    </button>
  );
};

export default Button;
