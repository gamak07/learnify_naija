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

const YearlyChart = () => {
  const labels = [
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
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Quizzes",
        data: [30, 35, 40, 38, 45, 50, 55, 52, 48, 60, 65, 70],
        fill: true,
        backgroundColor: "rgba(52, 211, 153, 0.5)",
        borderColor: "rgb(52, 211, 153)",
        tension: 0.4,
      },
      {
        label: "Practice",
        data: [60, 65, 70, 68, 75, 80, 85, 82, 78, 90, 95, 100],
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgb(59, 130, 246)",
        tension: 0.4,
      },
      {
        label: "Tutorials",
        data: [100, 110, 120, 115, 125, 135, 140, 138, 132, 150, 160, 170],
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

export default YearlyChart;
