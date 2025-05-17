import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// 1. DailyPerformance.jsx
const DailyPerformance = () => {
  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const data = {
    labels,
    datasets: [
      {
        label: 'Score',
        data: [65, 70, 72, 68, 75, 80, 78, 82, 85, 88, 90, 92, 89, 87, 85, 83, 86, 88, 90, 93, 95, 94, 96, 98],
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        fill: true,
        tension: 0.3,
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgba(34, 197, 94, 1)',
      }
    ],
  };

  return (
    <div>
      <Line data={data} options={{
        responsive: true,
        scales: { y: { beginAtZero: true, max: 100 } },
        plugins: { legend: { display: false } }
      }} />
    </div>
  );
};

export default DailyPerformance