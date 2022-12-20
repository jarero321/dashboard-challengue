import { formatNumberToCurrency } from "@/utilities/currency";
import React from "react";
export interface ComponentCurrencyInterface {
  value?: number;
}

const ComponentCurrency: React.FC<ComponentCurrencyInterface> = ({
  value = 442000,
}) => {
  return (
    <div>
      <p className=" text-black text-lg font-bold lg:text-3xl 2xl:text-6xl 2xl:pt-2 ">
        {formatNumberToCurrency(value)}
        <span className="text-xs font-semibold text-[#676E7C] lg:text-lg pl-1 ">
          MXN
        </span>
      </p>
    </div>
  );
};

export default ComponentCurrency;
