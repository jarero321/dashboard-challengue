import React from "react";
export interface ItemInfoInterface {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const ItemInfo: React.FC<ItemInfoInterface> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="w-full bg-white h-full px-[12px] py-[12px] rounded-[8px] shadow-lg 2xl:max-h-[200px]">
      <p className="font-semibold text-[#676E7C] lg:text-xl 2xl:text-3xl">
        {title}
      </p>
      <div className="pt-[12px]">
        {children ? (
          children
        ) : (
          <p className=" text-black text-lg font-bold lg:text-3xl 2xl:text-6xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default ItemInfo;
