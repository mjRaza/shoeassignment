import React from "react";
import { useParams, Outlet } from "react-router-dom";

export const ProductDetails = () => {
  const shoes = {
    Power: {
      name: "Power",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/828-2030-_2_360x.jpg?v=1591259658",
    },

    Skechers: {
      name: "Skechers",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-6351-_2_360x.jpg?v=1589804430",
    },

    Sparx: {
      name: "Sparx",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-9265-b_360x.jpg?v=1571921197",
    },

    "Tommy Takkies": {
      name: "Tommy Takkies",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/889-9008-b_360x.jpg?v=1578651075",
    },

    Ambassador: {
      name: "Ambassador",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/882-4095-b_360x.jpg?v=1578465104",
    },

    "Red Label - Women": {
      name: "Red Label - Women",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/550-6543-_2_360x.jpg?v=1591616873",
    },

    Mocassino: {
      name: "Mocassino",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/882-6042-b_360x.jpg?v=1566797280",
    },

    "Bubble Gummers": {
      name: "Bubble Gummers",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/351-9302-_2_360x.jpg?v=1591014712",
    },

    "Marie Claire": {
      name: "Marie Claire",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/502-6040-b_360x.jpg?v=1576238616",
    },

    Belle: {
      name: "Belle",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/604-6350-b_360x.jpg?v=1570171792",
    },
  };
  const data = useParams();
  let val = "";
  return (
    <div>
      {Object.entries(shoes).map((productId) => {
        if (productId[0] === data.id) {
          val = productId[1].img;
        }
      })}
      {val ? (
        <img
          style={{ width: "50%", margin: "0 auto", display: "flex" }}
          src={val}
          alt="alt"
        />
      ) : (
        <h1>Loading</h1>
      )}
      <Outlet />
    </div>
  );
};
