import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

// Sample data
const data = {
  labels: ["Students", "Teachers", "Parents"],
  datasets: [
    {
      label: "All Time Growth",
      data: [15200, 3800, 7400], // Adjusted data
      backgroundColor: [
        "rgba(99, 102, 241, 0.7)",    // Indigo (Students)
        "rgba(16, 185, 129, 0.7)",    // Green (Teachers)
        "rgba(251, 191, 36, 0.7)",    // Amber (Parents)
      ],
      borderColor: [
        "rgba(99, 102, 241, 1)",
        "rgba(16, 185, 129, 1)",
        "rgba(251, 191, 36, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const UserGrowthAllTimePieChart = () => {
  return (
    <div className="bg-white p-6 w-full max-w-lg mx-auto">
      <Pie data={data} options={options} />
    </div>
  );
};

export default UserGrowthAllTimePieChart;
