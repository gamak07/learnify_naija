import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const EngagementTrendChart = () => {
  const data = {
    labels: ['Apr 13', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', 'Apr 19'],
    datasets: [
      {
        label: 'Opens',
        data: [850, 980, 920, 960, 1300, 1350, 1330],
        borderColor: '#4A90E2',
        backgroundColor: '#4A90E2',
        tension: 0.3,
        pointStyle: 'circle',
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: false,
      },
      {
        label: 'Clicks',
        data: [450, 550, 520, 560, 700, 740, 720],
        borderColor: '#7ED321',
        backgroundColor: '#7ED321',
        tension: 0.3,
        pointStyle: 'circle',
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: false,
      },
      {
        label: 'Conversions',
        data: [120, 220, 180, 140, 160, 320, 380],
        borderColor: '#F5A623',
        backgroundColor: '#F5A623',
        tension: 0.3,
        pointStyle: 'circle',
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: false,
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: { top: 16, right: 16, bottom: 24, left: 24 }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 12 } }
      },
      y: {
        grid: {
          color: '#E5E7EB',
          drawBorder: false
        },
        ticks: {
          stepSize: 300,
          callback: val => String(val)
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          boxWidth: 12,
          padding: 16,
          font: { size: 14 }
        }
      },
      tooltip: {
        padding: 8,
        titleFont: { size: 14 },
        bodyFont: { size: 12 }
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="h-80">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default EngagementTrendChart;
