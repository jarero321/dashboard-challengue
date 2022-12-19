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
      <p className="font-semibold text-black text-lg font-bold lg:text-3xl">
        {formatNumberToCurrency(value)}
        <span className="font-semibold text-xs font-semibold text-[#676E7C] lg:text-lg pl-1 ">
          MXN
        </span>
      </p>
    </div>
  );
};

export default ComponentCurrency;
