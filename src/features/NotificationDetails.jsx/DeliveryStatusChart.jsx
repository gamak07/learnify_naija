import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Original dataset
const originalLabels = ['Delivered', 'Opened', 'Clicked', 'Failed', 'Bounced'];
const originalData = [400, 300, 200, 150, 50];
const originalColors = ['#3B82F6', '#34D399', '#FBBF24', '#EF4444', '#2DD4BF'];

// Chart.js options
const options = {
  cutout: '60%',
  animation: {
    animateRotate: true,
    animateScale: false,
  },
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
};

export default function DeliveryStatusChart() {
  // Visibility state for each slice
  const [visible, setVisible] = useState(
    originalLabels.map(() => true)
  );

  // Toggle slice visibility
  const toggleVisibility = (idx) => {
    setVisible((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  // Filter data based on visibility
  const filteredLabels = originalLabels.filter((_, idx) => visible[idx]);
  const filteredData = originalData.filter((_, idx) => visible[idx]);
  const filteredColors = originalColors.filter((_, idx) => visible[idx]);

  // Build chart data
  const chartData = {
    labels: filteredLabels,
    datasets: [
      {
        data: filteredData,
        backgroundColor: filteredColors,
        hoverOffset: 10,
      },
    ],
  };

  return (
    <div className="p-4 bg-white ">
      {/* Clickable legend at the top */}
      <div className="flex flex-wrap justify-center mb-4">
        {originalLabels.map((label, idx) => (
          <button
            key={label}
            onClick={() => toggleVisibility(idx)}
            className={`flex items-center m-1 px-2 py-1 rounded transition-colors duration-200 
              ${visible[idx] ? 'bg-gray-100' : 'bg-gray-200'}
            `}
          >
            <span
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: originalColors[idx] }}
            />
            <span className={`text-sm font-medium text-gray-700 ${!visible[idx] ? 'line-through' : ''}`}>
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* Donut chart */}
      <div className="w-full">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
}
