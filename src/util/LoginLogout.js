
import React, { Component, useState,useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import { loginUser,logoutUser} from "../redux/actions/userActions";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

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

function LoginLogout(props) {
    const {authenticated} = props;

 const handleLogout =  () => {
    props.logoutUser();
 
};

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
        <div>
            {loginLogout}
        </div>
    )
}

LoginLogout.propTypes = {
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




export default connect(mapStateToProps, {mapActionsToProps,logoutUser})(withStyles(styles)(LoginLogout));