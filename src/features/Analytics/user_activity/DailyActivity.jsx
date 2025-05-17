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

const DailyActivity = () => {
  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const data = {
    labels,
    datasets: [
      {
        label: "Active Users",
        data: [
          450, 520, 500, 480, 470, 460, 550, 600, 580, 620, 700, 750, 730, 710,
          690, 670, 800, 850, 830, 820, 900, 950, 970, 980,
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

export default DailyActivity;
