import React from "react";
import { UserNavBar } from "@/pages/Dashboard/components/UserNavBar";
import useDashboard from "./hook/useDashboard";
import { LineChart } from "./components/LineChart";
import { ItemInfo } from "./components/ItemInfo";
import { Loader } from "@/components/Loader";
import { ComponentCurrency } from "@/pages/Dashboard/components/ComponentCurrency";

const Dashboard: React.FC = () => {
  const [loadingInfo, setLoadingInfo] = React.useState(true);
  const { getUserReport, dashboardState } = useDashboard();
  const { topPaymentMethod, topTicket, averageTicket } = dashboardState;

  const settingData = async () => {
    await getUserReport();
    setLoadingInfo(false);
  };

  React.useEffect(() => {
    settingData();
  }, []);

  return (
    <div className="bg-bg-default flex flex-col w-screen md:h-screen px-[24px] py-[24px] lg:px-[64px]">
      {loadingInfo ? (
        <Loader />
      ) : (
        <>
          <div>
            <UserNavBar />
            <p className="pt-[32px] 2xl:pt-[64px] font-semibold text-[#676E7C] lg:text-xl 2xl:text-3xl">
              Reporte de <span className="text-black font-bold "> Hoy </span>
            </p>
          </div>
          <div className="w-full flex flex-col lg:items-center lg:justify-center md:flex-row gap-[32px] pt-[24px]">
            <div className="w-full h-full md:h-[328px] lg:h-[364px] xl:h-[400px] 2xl:h-[750px] bg-white px-[16px] py-[16px] 2xl:px-[32px] 2xl:py-[32px] rounded-[8px] shadow-lg ">
              <p className="font-semibold text-[#676E7C] lg:text-xl 2xl:text-3xl ">
                Ingresos
              </p>
              <ComponentCurrency />
              <LineChart chartData={dashboardState.revenuePerHour} />
            </div>
            <div className="w-full h-full flex flex-col justify-between gap-[32px]">
              <ItemInfo title="Ticket promedio">
                <ComponentCurrency value={averageTicket} />
              </ItemInfo>
              <ItemInfo title="Ticket tope">
                <ComponentCurrency value={topTicket} />
              </ItemInfo>
              <ItemInfo
                title="Método de pago más usado"
                subtitle={topPaymentMethod}
              ></ItemInfo>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
