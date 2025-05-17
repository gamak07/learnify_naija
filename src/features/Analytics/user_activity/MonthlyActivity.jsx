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

const MonthlyActivity = () => {
  const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
  const data = {
    labels,
    datasets: [
      {
        label: "Active Users",
        data: [4500, 4800, 5000, 5200],
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

export default MonthlyActivity;
