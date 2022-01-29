import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../components/images/GaloreLandlogo1.jpg";
import { Link } from "react-router-dom";
//Redux stuff
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/userActions';


const styles = (theme) => ({
    ...theme.spreadIt,
  });

function Logout() {

    handleLogout = () => {
        this.props.logoutUser();
      };
    

    return (
        <div>
            
        </div>
    )
}

   logout.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,

  };
 
  const mapStateToProps = (state) => ({
    user: state.user,
   });
  

  const mapActionsToProps = {
    logoutUser,
    
};

  export default connect(mapStateToProps, {mapActionsToProps})(withStyles(styles)(logout));
  
  