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
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// 1. DailyChart.jsx
const DailyChart = () => {
  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const data = {
    labels,
    datasets: [
      {
        label: "Quizzes",
        data: labels.map(() => Math.floor(Math.random() * 10) + 5),
        fill: true,
        backgroundColor: "rgba(52, 211, 153, 0.5)",
        borderColor: "rgb(52, 211, 153)",
        tension: 0.4,
      },
      {
        label: "Practice",
        data: labels.map(() => Math.floor(Math.random() * 15) + 10),
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgb(59, 130, 246)",
        tension: 0.4,
      },
      {
        label: "Tutorials",
        data: labels.map(() => Math.floor(Math.random() * 20) + 15),
        fill: true,
        backgroundColor: "rgba(168, 85, 247, 0.5)",
        borderColor: "rgb(168, 85, 247)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default DailyChart;
