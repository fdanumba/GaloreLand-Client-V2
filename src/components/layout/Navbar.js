import React, { Component, useState,useEffect } from "react";
import { Link, Redirect, withRouter  } from "react-router-dom";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
  LOADING_USER, 
  MARK_NOTIFICATIONS_READ
} from "../../redux/types";
import axios from "axios";



import "../../App.css";
import LogInOut from "../../util/LoginLogout"

import "../css/Header.css";

//  MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Users from "../users/Users";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { loginUser,logoutUser} from "../../redux/actions/userActions";

const styles = (theme) => ({
  ...theme.spreadIt,
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});


function Navbar(props) {
  //const { basket, logedIn, authenticated } = props;
  const {  authenticated } = props;


  const handleLogout =  () => {
    props.logoutUser();
 
};
 
  console.log(authenticated);
  const loginLogout = authenticated ? (
    <div>
    <Button color="inherit" component={Link} to="/galoreSocial">
      Socials
    </Button>
      <Button color="inherit" tip="Logout" onClick={handleLogout}>
      Logout
    </Button>
    </div>

  ) : (
    <div>
       <Button color="inherit" component={Link} to="/galoreSocial">
          Socials
        </Button>
      <Button color="inherit" component={Link} to="/login">
        Login
      </Button>
      <Button color="inherit" component={Link} to="/signup">
        Signup
      </Button>
    </div>
  ); 
  return (
    <AppBar>
      <Toolbar className="nav-container">
         {/* <Button color="inherit" component={Link} to="/">
          Home
        </Button> */}
        {/* <Button color="inherit" component={Link} to="/galoreSocial">
          Socials
        </Button> */}

        {loginLogout}
       
          {/* {LogInOut(authenticated)} */}

      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
   data: PropTypes.object.isRequired,
  Login: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
  userReducer: PropTypes.func.isRequired,
});
const mapActionsToProps = {   logoutUser, loginUser};




export default connect(mapStateToProps, {mapActionsToProps,logoutUser})(withStyles(styles)(Navbar));

// export default Navbar;
