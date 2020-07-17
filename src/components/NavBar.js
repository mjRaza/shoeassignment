import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: "start",
    marginRight: theme.spacing(2),
  },
  links: {
    color: "white",
    marginLeft: "20px",
    textDecoration: "none",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.links}>
              Shoe Store
            </Link>
          </Typography>

          <Typography variant="h6">
            <Link to="about" className={classes.links}>
              About
            </Link>
            <Link to="products" className={classes.links}>
              Products
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
