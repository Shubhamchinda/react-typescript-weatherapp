import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";

interface Props {}

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5),
    padding: theme.spacing(1, 1.5),
    backgroundColor: 'grey'
  }
}));

const AppComp: FC = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Weather App
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="/"
              className={classes.link}
            >
              <b>Get Weather</b>
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppComp;
