import React from "react";
export interface LineChartInterface {
  chartData: any;
}
import "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart: React.FC<LineChartInterface> = ({ chartData }) => {
  const data = {
    labels: [...Array(chartData.length)].map((_x) => ""),
    datasets: [
      {
        label: "Ingresos",
        data: chartData,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        fill: true,
        pointStyle: "rect",
      },
    ],
  };
  return (
    <div className="w-full h-full">
      <Line data={data} className="w-full h-full" />
    </div>
  );
};

export default LineChart;
