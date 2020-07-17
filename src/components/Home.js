import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
  root: {
    maxWidth: "30%",
    textAlign: "center",
    margin: "4px",

    // // display: "flex",

    // right: "50%",
  },
  area1: {
    maxWidth: "30%",
  },
  area2: {
    maxWidth: "30%",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <Link to="/products/men">
          <CardActionArea>
            <CardMedia
              component="img"
              height="500px"
              alt="Men Shoes"
              image="https://image.freepik.com/free-photo/pair-trainers_144627-3800.jpg"
              title="For Men"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Men
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
      <Card className={classes.root}>
        <Link to="/products/women">
          <CardActionArea>
            <CardMedia
              component="img"
              height="500px"
              alt="Men Shoes"
              image="https://image.freepik.com/free-photo/leather-sandals-pair-colors-sea_1203-6441.jpg"
              title="For Men"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Women
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
}
