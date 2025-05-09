import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { FaArrowUp } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [50, 60, 55, 70, 65, 75, 60],
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 150);
          gradient.addColorStop(0, "rgba(59, 130, 246, 0.4)");
          gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
          return gradient;
        },
        borderColor: "#3B82F6", // blue-500
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { display: false, grid: { display: false } },
      y: { display: false, grid: { display: false } },
    },
    plugins: { tooltip: { enabled: false } },
  };

  return (
    <>
      <div className="mt-4 h-16">
        <Line data={data} options={options} />
      </div>
      <div className="mt-2 flex items-center text-sm">
        <span className="text-green-600 font-medium flex items-center">
          <FaArrowUp className="mr-1 text-xs" />
          18%
        </span>
        <span className="text-gray-500 ml-2">vs last week</span>
      </div>
    </>
  );
};

export default LineChart;
