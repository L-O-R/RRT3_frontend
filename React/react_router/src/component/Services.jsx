import React from "react";
import { Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Services;
