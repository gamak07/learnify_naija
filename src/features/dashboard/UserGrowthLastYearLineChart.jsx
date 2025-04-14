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
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Students",
      data: [
        890, 1150, 1550, 2900, 2400, 2000, 904, 1130, 2340, 310, 345, 1234,
      ],
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
      data: [190, 30, 260, 210, 100, 370, 90, 120, 143, 234, 123, 432],
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
      data: [250, 550, 1300, 120, 100, 600, 456, 543, 120, 432, 312, 203],
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

const UserGrowthLastYearLineChart = () => {
  return (
    <div className="bg-white p-6">
      <Line data={data} options={options} />
    </div>
  );
};

export default UserGrowthLastYearLineChart;
