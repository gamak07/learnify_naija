// components/NotificationChart.jsx
import React from "react";
import {
  Line
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const NotificationChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Sent",
        data: data.map((item) => item.sent),
        borderColor: "#3B82F6",
        backgroundColor: "#3B82F6",
        tension: 0.3,
        fill: false,
        pointRadius: 4,
      },
      {
        label: "Delivered",
        data: data.map((item) => item.delivered),
        borderColor: "#10B981",
        backgroundColor: "#10B981",
        tension: 0.3,
        fill: false,
        pointRadius: 4,
      },
      {
        label: "Failed",
        data: data.map((item) => item.failed),
        borderColor: "#EF4444",
        backgroundColor: "#EF4444",
        tension: 0.3,
        fill: false,
        pointRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1000,
        },
      },
    },
  };

  return (
    <div className="w-full h-80">
      <Line data={chartData} options={chartOptions} style={{width: '100%'}} />
    </div>
  );
};

export default NotificationChart;
