import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { FaArrowUp } from "react-icons/fa";
Chart.register(ArcElement);

const TicketResolutionChart = ({ percentage = 87 }) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage], // Two values for the filled and unfilled parts
        backgroundColor: ["#1ABC9C", "#EEEEEE"], // Example colors, adjust as needed
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    cutout: "80%", // Adjust for the thickness of the circle
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: false, // Hide tooltips
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };

  return (
    <>
      <div className="relative h-16 top-4">
        {" "}
        {/* Adjust size as needed */}
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-800">
          {percentage}%
        </div>
      </div>
      <div className="mt-5 flex items-center text-sm">
        <span className="text-green-600 font-medium flex items-center">
          <FaArrowUp className="mr-1 text-xs" />
          5%
        </span>
        <span className="text-gray-500 ml-2">vs last month</span>
      </div>
    </>
  );
};

export default TicketResolutionChart;
