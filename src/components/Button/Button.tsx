import React from "react";
export interface ButtonInterface {
  text: string;
  type: "submit" | "button";
  onClick?(): void;
}

const Button: React.FC<ButtonInterface> = ({ text, type, onClick }) => {
  return (
    <button
      onClick={() => (onClick ? onClick() : () => null)}
      type={type}
      className="w-full h-[40px] bg-black text-white font-semibold rounded-[6px] "
    >
      {text}
    </button>
  );
};

export default Button;
