import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";

import HomeContent from "./HomeContent";
// import Modal from "../UI/Modal";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
}));

let iconData1 = {
  Home: <HomeIcon />,
  Explore: <ExploreIcon />,
  Subscriptions: <SubscriptionsIcon />,
};

let iconData2 = {
  Library: <VideoLibraryIcon />,
  History: <HistoryIcon />,
};

export default function MiniDrawer(props) {
  const classes = useStyles();

  // const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <div className={classes.root}>
      <Drawer
        style={{ zIndex: "0" }}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.isOpen,
          [classes.drawerClose]: !props.isOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.isOpen,
            [classes.drawerClose]: !props.isOpen,
          }),
        }}
      >
        <div className={classes.toolbar}></div>
        <Divider />
        <List>
          {Object.keys(iconData1).map((key, index) => (
            <ListItem button key={key}>
              <ListItemIcon>{iconData1[key]}</ListItemIcon>
              <ListItemText primary={key} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Object.keys(iconData2).map((key, index) => (
            <ListItem button key={key}>
              <ListItemIcon>{iconData2[key]}</ListItemIcon>
              <ListItemText primary={key} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <HomeContent sideBarOpen={props.isOpen} />
        {/* {modalIsOpen && <Modal />} */}
      </main>
    </div>
  );
}
