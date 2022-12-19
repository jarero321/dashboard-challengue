import React from "react";
export interface ButtonInterface {
  text: string;
  type: "submit" | "button";
  onClick?(): void;
  width?: string;
  height?: string;
}

const Button: React.FC<ButtonInterface> = ({
  text,
  type,
  onClick,
  width,
  height,
}) => {
  return (
    <button
      onClick={() => (onClick ? onClick() : () => null)}
      type={type}
      className={`w-full h-[40px] bg-black text-white font-semibold rounded-[6px] ${
        height ?? height
      } ${width ?? ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
