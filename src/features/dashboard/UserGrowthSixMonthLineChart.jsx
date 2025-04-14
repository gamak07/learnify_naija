import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample data
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Students",
      data: [1200, 1350, 1750, 2100, 2400, 2800],
      borderColor: "#6366f1", // indigo-500
      backgroundColor: "#6366f1",
      tension: 0.3,
      pointRadius: 5,
      pointHoverRadius: 7,
      pointBorderWidth: 2,
      pointBackgroundColor: "#fff",
      pointBorderColor: "#6366f1",
    },
    {
      label: "Teachers",
      data: [200, 230, 260, 280, 300, 340],
      borderColor: "#14b8a6", // teal-500
      backgroundColor: "#14b8a6",
      tension: 0.3,
      pointRadius: 5,
      pointHoverRadius: 7,
      pointBorderWidth: 2,
      pointBackgroundColor: "#fff",
      pointBorderColor: "#14b8a6",
    },
    {
      label: "Parents",
      data: [850, 950, 1100, 1250, 1400, 1600],
      borderColor: "#f59e0b", // amber-500
      backgroundColor: "#f59e0b",
      tension: 0.3,
      pointRadius: 5,
      pointHoverRadius: 7,
      pointBorderWidth: 2,
      pointBackgroundColor: "#fff",
      pointBorderColor: "#f59e0b",
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 20,
        font: {
          size: 14,
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return value.toLocaleString();
        },
      },
    },
  },
};

const UserGrowthSixMonthLineChart = () => {
  return (
    <div className="bg-white p-6 ">
      <Line data={data} options={options} />
    </div>
  );
};

export default UserGrowthSixMonthLineChart;
