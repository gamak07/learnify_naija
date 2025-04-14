import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Sample data
const data = {
  labels: ["Biology", "Chemistry", "Physics", "Mathematics", "English"],
  datasets: [
    {
      label: "Users",
      data: [120, 190, 300, 500, 200, 300],
      backgroundColor: "rgba(99, 102, 241, 0.7)", // indigo-500
      // barThickness: 30,
      categoryPercentage: 0.8,
      barPercentage: 1,
    },
  ],
};

// Options (config)
const options = {
  indexAxis: "y",
  responsive: true,
  plugins: {
    legend: {
        display: false
    },
    title: {
      display: false,
      text: "Monthly User Growth",
    },
  },
};

const TopSubjectsBarChart = () => {
  return <Bar data={data} options={options} style={{ height: `${data.labels.length * 80}px` }} />;
};

export default TopSubjectsBarChart;
