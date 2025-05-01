import React from "react";

const Nav = ({ isActive, setIsActive }) => {
  const handleActiveNav = (nav) => {
    setIsActive(nav);
  };
  console.log(isActive);
  const getNavClass = (tab) => {
    return isActive === tab
      ? `cursor-pointer whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-blue-500 text-blue-600`
      : `cursor-pointer whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:border-gray-300`;
  };

  return (
    <nav className="flex -mb-px ">
      <div
        className={getNavClass("overview")}
        onClick={() => handleActiveNav("overview")}
      >
        Overview
      </div>
      <div
        className={getNavClass("content")}
        onClick={() => handleActiveNav("content")}
      >
        Content
      </div>
      <div
        className={getNavClass("analytics")}
        onClick={() => handleActiveNav("analytics")}
      >
        Analytics
      </div>
      <div
        className={getNavClass("timeline")}
        onClick={() => handleActiveNav("timeline")}
      >
        Timeline
      </div>
    </nav>
  );
};

export default Nav;
