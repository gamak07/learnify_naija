// src/components/ChannelPerformanceChart.jsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChannelPerformanceChart = () => {
  const data = {
    labels: ['In-app', 'SMS', 'Push', 'Email'],
    datasets: [
      {
        label: 'Sent',
        data: [15000, 9000, 12500, 18000],
        backgroundColor: '#4A90E2',
        borderRadius: 4,
        barThickness: 16
      },
      {
        label: 'Delivered',
        data: [15000, 8200, 11000, 17000],
        backgroundColor: '#7ED321',
        borderRadius: 4,
        barThickness: 16
      },
      {
        label: 'Opened',
        data: [9000, 5800, 6300, 9500],
        backgroundColor: '#F5A623',
        borderRadius: 4,
        barThickness: 16
      },
      {
        label: 'Clicked',
        data: [3200, 2100, 2900, 5500],
        backgroundColor: '#D0021B',
        borderRadius: 4,
        barThickness: 16
      }
    ]
  };

  const options = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 16,
        right: 16,
        bottom: 24,
        left: 24
      }
    },
    scales: {
      x: {
        grid: {
          color: '#E5E7EB',
          drawBorder: false
        },
        ticks: {
          stepSize: 5000,
          callback: (val) => String(val)
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 12,
          padding: 16,
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        padding: 12,
        titleFont: { size: 14 },
        bodyFont: { size: 12 }
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="h-96">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChannelPerformanceChart;
