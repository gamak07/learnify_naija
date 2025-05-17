import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

export const YearlyActivity = () => {
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
        label: "Active Users",
        data: [
          30000, 32000, 31000, 33000, 35000, 37000, 39000, 38000, 40000, 42000,
          43000, 44000,
        ],
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        borderColor: "rgba(59, 130, 246, 1)",
        pointBackgroundColor: "white",
        pointBorderColor: "rgba(59, 130, 246, 1)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div>
      <Line
        data={data}
        options={{
          responsive: true,
          scales: { y: { beginAtZero: true } },
          plugins: { legend: { display: false } },
        }}
      />
    </div>
  );
};

export default YearlyActivity;
