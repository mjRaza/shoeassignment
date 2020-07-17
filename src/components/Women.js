import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { Link, Outlet } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "100%",
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function Women() {
  const classes = useStyles();
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
  return (
    <div className={classes.root}>
      <GridList cellHeight={350} cols={3} className={classes.gridList}>
        {Object.entries(shoes).map(([productId, { img, name }]) => (
          <GridListTile key={name}>
            <Link to={`${name}`}>
              <img src={img} alt={name} />
              <GridListTileBar
                title={name}
                subtitle={<span>by: Jaffar</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${name}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
