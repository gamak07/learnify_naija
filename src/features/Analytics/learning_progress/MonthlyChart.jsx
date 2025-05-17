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

const MonthlyChart = () => {
  const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
  const data = {
    labels,
    datasets: [
      {
        label: "Quizzes",
        data: [20, 25, 22, 28],
        fill: true,
        backgroundColor: "rgba(52, 211, 153, 0.5)",
        borderColor: "rgb(52, 211, 153)",
        tension: 0.4,
      },
      {
        label: "Practice",
        data: [50, 55, 53, 58],
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgb(59, 130, 246)",
        tension: 0.4,
      },
      {
        label: "Tutorials",
        data: [80, 90, 85, 95],
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

export default MonthlyChart;
