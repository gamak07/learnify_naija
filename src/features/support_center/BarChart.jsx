import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { FaArrowUp } from "react-icons/fa";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  // Sample data matching the UI heights
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Dataset",
        data: [65, 59, 80, 81, 56, 55, 40, 60],
        backgroundColor: "#6366F1", // Tailwind indigo-500
        borderRadius: 4,
        barPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: { display: false },
      },
      y: {
        grid: { display: false },
        ticks: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <>
      <div className="mt-4 h-16">
        <Bar data={data} options={options} />
      </div>
      <div className="mt-2 flex items-center text-sm">
        <span className="text-green-600 font-medium flex items-center">
          <FaArrowUp className="mr-1 text-xs" />
          12%
        </span>
        <span className="text-gray-500 ml-2">vs last week</span>
      </div>
    </>
  );
};

export default BarChart;
