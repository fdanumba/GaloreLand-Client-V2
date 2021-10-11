import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import "../../App.css";

import "../css/Header.css";

//  MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Users from "../users/Users";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useHistory } from "react-router-dom";

function Navbar(props) {
  const { basket, logedIn, authenticated, logoutUser } = props;

   const handleLogout = () => {
    // logoutUser();
    
  };
  console.log(authenticated);
  const loginLogout = authenticated ? (
    <Button color="inherit" onClick= {handleLogout}  component={Link} to="/login">
      Logout
    </Button>
  ) : (
    <div>
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
        <Button color="inherit" component={Link} to="/galoreSocial">
          Socials
        </Button>

        {loginLogout}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
