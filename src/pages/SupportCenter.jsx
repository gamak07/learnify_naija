import React from "react";
import Filters from "../features/support_center/Filters";
import Stats from "../features/support_center/Stats";
import Tickets from "../features/support_center/Tickets";

const SupportCenter = () => {
  return (
    <div>
      <Filters />
      <Stats />
      <Tickets />
    </div>
  );
};

export default SupportCenter;
