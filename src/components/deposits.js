/* eslint-disable no-script-url */

import React from "react";
import Link from "@mui/material/Link";
// import { makeStyles } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Title from "./title";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import clsx from "clsx";

// const useStyles = makeStyles((theme) => ({
const useStyles = createTheme((theme) => ({
  depositContext: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Deposits() {
  const classes = useStyles;
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <React.Fragment>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Title>Total Revenue</Title>
          <Typography component="p" variant="h4">
            $57,281.80
          </Typography>
          <Typography color="textSecondary" className={classes.depositContext}>
            Current Month
          </Typography>
          <div>
            <Link color="primary" href="javascript:;">
              View Balance
            </Link>
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Title>Revenue from Shopify</Title>
          <Typography component="p" variant="h4">
            $28,449.00
          </Typography>
          <Typography
            color="textSecondary"
            className={classes.depositContext}
          ></Typography>
          <div>
            <Link color="primary" href="javascript:;">
              View Balance
            </Link>
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Title>Revenue from Amazon</Title>
          <Typography component="p" variant="h4">
            $15,392.30
          </Typography>
          <Typography
            color="textSecondary"
            className={classes.depositContext}
          ></Typography>
          <div>
            <Link color="primary" href="javascript:;">
              View Balance
            </Link>
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Title>Revenue from eBay</Title>
          <Typography component="p" variant="h4">
            $13,440.50
          </Typography>
          <Typography
            color="textSecondary"
            className={classes.depositContext}
          ></Typography>
          <div>
            <Link color="primary" href="javascript:;">
              View Balance
            </Link>
          </div>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
