import React, { useState } from "react";
import {
  createTheme,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  Container,
  Grid,
  Paper
} from "@mui/material";
import { ChevronLeft, Menu, Notifications } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import clsx from "clsx";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./chart";
import Deposits from "./deposits";
import Orders from "./orders";

const drawerWidth = 240;

const useStyless = () => createTheme((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  iconButton:{
    positionright: 10
  }
}));

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? "#7c21f3" : "#64b5f6", // Custom primary color for light and dark mode
    },
    secondary: {
      main: mode === "light" ? "#f50057" : "#ff4081", // Custom secondary color for light and dark mode
    },
    background: {
      default: mode === "light" ? "#fff" : "#121212", // Custom background color for light and dark mode
    },
    text: {
      primary: mode === "light" ? "#000" : "#fff", // Custom text color for light and dark mode
    },
  },
});

const Dashboard = () => {
  const classes = useStyless();
  const [open, setOpen] = useState(false);
  const [colorMode, setColorMode] = useState("light");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleColorModeToggle = () => {
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const sidebarItems = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8"];

  const theme = getDesignTokens(colorMode);

  return (
    <div className={classes.root} >
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar sx={{ backgroundColor: theme.palette.primary.main }}>
        <IconButton
            edge="start"
            color="inherit"
            className={classes.menuButton}
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" className={classes.title}sx={{ flexGrow: 1 }}>
            Dashboard Title
          </Typography>
          <IconButton color="inherit" onClick={handleColorModeToggle} sx={{ marginLeft: "auto" }}>
            {colorMode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      </Box>

      <Drawer
          // variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeft />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>

      <main >
        {/* <div style={{ padding: "20px", backgroundColor: theme.palette.primary.main }}> */}
        <div style={{ padding: "20px"}}>
          <Typography variant="h4">Main Content</Typography>
          <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
              {/* Recent Deposits */}
              <Deposits />

              {/* Chart */}
              <Grid item xs={12} md={8} lg={6}>
                <Paper >
                  <Chart />
                </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={6}>
                <Paper >
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
