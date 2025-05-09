import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [30, 20, 50],
        backgroundColor: ["#EF4444", "#3B82F6", "#F59E0B"], // red-500, blue-500, amber-500
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <>
      <div className="mt-4 h-16">
        <Doughnut data={data} options={options} />
      </div>
      <div className="mt-2 flex items-center justify-between text-xs">
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full bg-red-500 mr-1"></span>
          <span className="text-gray-600">High (12)</span>
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full bg-yellow-500 mr-1"></span>
          <span className="text-gray-600">High (18)</span>
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full bg-blue-500 mr-1"></span>
          <span className="text-gray-600">High (8)</span>
        </div>
      </div>
    </>
  );
};

export default DoughnutChart;
