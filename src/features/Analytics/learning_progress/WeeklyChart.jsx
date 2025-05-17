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

const WeeklyChart = () => {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const data = {
    labels,
    datasets: [
      {
        label: "Quizzes",
        data: [5, 8, 6, 7, 10, 12, 9],
        fill: true,
        backgroundColor: "rgba(52, 211, 153, 0.5)",
        borderColor: "rgb(52, 211, 153)",
        tension: 0.4,
      },
      {
        label: "Practice",
        data: [15, 13, 14, 12, 18, 20, 17],
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgb(59, 130, 246)",
        tension: 0.4,
      },
      {
        label: "Tutorials",
        data: [25, 28, 26, 29, 35, 40, 38],
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

export default WeeklyChart;
