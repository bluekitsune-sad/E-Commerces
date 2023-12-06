import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";

const useStyles = createTheme((theme) => ({
  title: {
    color: "#444545",
    textAlign: "center",
  },
}));

export default function Title(props) {
  const classes = useStyles;

  return (
    <Typography
      className={classes.title}
      component="h2"
      variant="h6"
      color="primary"
      gutterBottom
    >
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
