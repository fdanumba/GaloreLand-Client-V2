// import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";
// import withStyles from "@material-ui/core/styles/withStyles";
// import { Link } from "react-router-dom";

// class LoadYipUser extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
// LoadYipUser.propTypes = {
//     user: PropTypes.object.isRequired,
//    };
  
//   const mapStateToProps = (state) => ({
//     user: state.user,
//   });
  
//   export default connect(mapStateToProps)(withStyles(styles)(LoadYipUserYip));
  
import React from 'react'

 function LoadYipUser() {
    const {
        window,
        user: {
          authenticated,
          credentials: { handle },
        },
        email: {email},

      } = props;
    
    return (
        <div>
            
        </div>
    )
}


LoadYipUser.propTypes = {
    user: PropTypes.object.isRequired,
    email,
   };
  
  const mapStateToProps = (state) => ({
    user: state.user,
    email,
  });
  
  export default connect(mapStateToProps)(withStyles(styles)(LoadYipUserYip));
