import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const TemporaryDrawer = (props) => {
  const classes = useStyles();

  const list = () => (
    <div className={clsx(classes.list)} role="presentation">
      <List>
        <ListItem button key="inbox">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="text" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Drawer open={props.isOpen} onClose={props.drawerToggle}>
        {list()}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
