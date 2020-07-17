import React from "react";
import { Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <div style={{ display: "flex", textAlign: "center" }}>
      <Outlet />
    </div>
  );
};
