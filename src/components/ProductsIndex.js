import React from "react";
import { Outlet } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
export const ProductsIndex = () => {
  return (
    <div style={{ display: "flex", textAlign: "center" }}>
      <div style={{ width: "10%" }}>
        <Button color="secondary" style={{ width: "100%" }}>
          <Link to="/products/men">
            <Typography>Men</Typography>
          </Link>
        </Button>
        <Button color="secondary" style={{ width: "100%" }}>
          <Link to="/products/women">
            <Typography>Women</Typography>
          </Link>
        </Button>
      </div>
      <Outlet />
    </div>
  );
};
