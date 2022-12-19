import React from "react";
export interface ItemInfoInterface {}

const ItemInfo: React.FC<ItemInfoInterface> = () => {
  return (
    <div className="w-full bg-white h-full px-[12px] py-[12px] rounded-[8px] shadow-lg ">
      <p className="font-semibold text-[#676E7C] lg:text-xl">Ticket promedio</p>
      <p> $1,2000 MXN </p>
    </div>
  );
};

export default ItemInfo;
