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

const WeeklyActivity = () => {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const data = {
    labels,
    datasets: [
      {
        label: "Active Users",
        data: [800, 920, 890, 880, 1250, 1300, 1280],
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

export default WeeklyActivity;
