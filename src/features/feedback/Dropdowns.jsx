import React from "react";

const Dropdowns = ({ children }) => {
  return (
    <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10">
      {children}
    </div>
  );
};

export default Dropdowns;
