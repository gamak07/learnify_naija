import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceMetricsChart = () => {
  // Labels for 24-hour period (09:00 to next day 07:00)
  const labels = useMemo(
    () => [
      '09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00',
      '19:00','20:00','21:00','22:00','23:00','00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00'
    ],
    []
  );

  // Data series matching the UI
  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: 'Delivered',
          data: [8000, 1500, 700, 300, 120, 50, 30, 20, 15, 10, 8, 6, 5, 4, 3, 2, 2, 1, 1, 1, 1, 1, 1],
          borderColor: 'rgba(59, 130, 246, 1)',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          tension: 0.4,
          pointRadius: 3,
          pointHoverRadius: 6,
        },
        {
          label: 'Opened',
          data: [3800, 900, 400, 150, 60, 30, 20, 15, 10, 8, 6, 5, 4, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1],
          borderColor: 'rgba(34, 197, 94, 1)',
          backgroundColor: 'rgba(34, 197, 94, 0.2)',
          tension: 0.4,
          pointRadius: 3,
          pointHoverRadius: 6,
        },
        {
          label: 'Clicked',
          data: [1500, 400, 200, 100, 40, 20, 10, 8, 6, 5, 4, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          borderColor: 'rgba(168, 85, 247, 1)',
          backgroundColor: 'rgba(168, 85, 247, 0.2)',
          tension: 0.4,
          pointRadius: 3,
          pointHoverRadius: 6,
        },
      ],
    }),
    [labels]
  );

  // Chart.js options
  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { usePointStyle: true, padding: 16 }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
        title: {
          display: false,
        },
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false,
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { padding: 8, font: { size: 12 } }
        },
        y: {
          beginAtZero: true,
          grid: { drawBorder: false, color: '#e5e7eb' },
          ticks: { stepSize: 2000, padding: 8, font: { size: 12 } }
        },
      },
    }),
    []
  );

  return (
    <div className="">
      <h2 className="text-sm font-medium text-gray-700 mb-3">Engagement Over Time (24 Hours)</h2>
      <div className="relative h-80 p-6">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default PerformanceMetricsChart;
