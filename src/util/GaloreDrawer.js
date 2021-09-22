import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import Button from "@material-ui/core/Button";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HomeIcon from "@material-ui/icons/Home";
import AddCommentIcon from "@material-ui/icons/AddComment";
import StoreIcon from "@material-ui/icons/Store";
import AnnouncementIcon from "@material-ui/icons/Announcement";

import TransitEnterexitIcon from "@material-ui/icons/TransitEnterexit";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LoginIcon from "@material-ui/icons/VpnKey";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { logoutUser } from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import LOGIN from "../pages/login";
import { useHistory } from 'react-router-dom'

//  Redux
import { connect } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function GaloreDrawer(props) {
  const {
    window,
    user: {
      authenticated,
      credentials: { handle },
    },
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const history = useHistory();

  const handleLogout = () => {
    console.log("I am in handleLogout");
     props.logoutUser();
     history.push(`/`);
  };

  // const handleGohome = () => {
  //   props.logoutUser();
  // };
  const handleNews = () => {
  
    history.push(`/news`);
  };


  const handleLogin = () => {
  
    history.push(`/login`);
  };

  const handleMarket = () => {
  
    history.push(`/marketPlace`);
  };
 

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {
          // ['Home ', 'Sign out '].map((text, index) => (
          //   <ListItem button key={text}>
          //     <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <ExitToAppIcon />}</ListItemIcon>
          //     <ListItemText primary={text} />
          //   </ListItem>
          // ))
          // <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> :( <ExitToAppIcon

          authenticated
            ? //["Sign out ", "Home "].map((text, index) => (

              ["Logout", " Home"].map((text, index) => (
                <ListItem button key={index}>
                  <ListItemIcon>
                    {index === 0 ? (
                      <ExitToAppIcon onClick={handleLogout} />
                    ) : (
                      <HomeIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))
            : //: (["LogIn", "Home "].map((text, index) => (

              [" Login", "Home"].map((text, index) => (
                <ListItem button key={index}>
                  <ListItemIcon>
                    {index === 0 ? (
                      <TransitEnterexitIcon onClick={handleLogin} />
                    ) : (
                      <HomeIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))
        }
      </List>
      <Divider />
      {/* <List>
        {["Market Place"].map((text, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              {index === 0 ? <AnnouncementIcon onClick={handleNews}/> : <StoreIcon onClick={handleMarket}/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  // const LoginLogout =
  // authenticated? (
  //   <ExitToAppIcon />
  // ) : (<LoginIcon />);
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

GaloreDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = { logoutUser };

export default connect(mapStateToProps, mapActionsToProps)(GaloreDrawer);
