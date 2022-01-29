
import React, { Component, useState,useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function LoginLogout(props) {
    const {authenticated} = props;

      const loginLogout = authenticated ? (

        <div>
        <Button color="inherit" component={Link} to="/galoreSocial">
          Socials
        </Button>
          <Button color="inherit"   component={Link} to="/login">
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
        <div>
            {loginLogout}
        </div>
    )
}
