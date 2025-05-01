import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

// Sample data
const data = {
  labels: ["Active Users", "New Users", "Premium Users", "Inactive Users"],
  datasets: [
    {
      data: [350, 250, 200, 180], // Adjusted data
      backgroundColor: ["#3B82F6", "#34D399", "#FBBF24", "#EF4444"],
      borderColor: ["#3B82F6", "#34D399", "#FBBF24", "#EF4444"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const AudienceBreakdownChart = () => {
  return (
    <div className="px-6 max-w-md mx-auto h-96">
      <Pie data={data} options={options} className="w-full h-full" />
    </div>
  );
};

export default AudienceBreakdownChart;
