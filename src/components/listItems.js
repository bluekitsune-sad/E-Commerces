import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import {
  Home,
  ShoppingCart,
  People,
  BarChart,
  Apps,
  Assignment,
} from "@mui/icons-material";

export const mainListItems = (
  <div>
    <ListSubheader inset>Menu</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCart />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <People />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChart />
      </ListItemIcon>
      <ListItemText primary="Analytics" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Apps />
      </ListItemIcon>
      <ListItemText primary="Apps" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>More</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="This Week" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="This Month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="YTD Sales" />
    </ListItem>
  </div>
);
