import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Card, Typography, CardContent } from "@material-ui/core";

import AppBar from "./component/appBar";
import Weather from "./container/weather";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Card: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center"
    },
    card: {
      margin: "100px 100px 100px 100px",
      padding: "50px 50px 50px 50px",
      minWidth: 500,
      minHeight: 400,
      justifyContent: "center",
      boxShadow: "5px 10px 10px 5px rgba(0,0,0,0.2)"
    },
    title: {
      fontSize: 22
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar />
      <div className={classes.Card}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <b>Select City</b>
            </Typography>
            <Weather />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default App;
