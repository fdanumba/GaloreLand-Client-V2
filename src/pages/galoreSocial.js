import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
// import EditDetails from "./EditDetails";
import MyButton from "../util/MyButton";
import ProfileSkeleton from "../util/ProfileSkeleton";

import Yip from "../components/yip/Yip";
import Profile from "../components/profile/profile";
import YipSkeleton from "../util/YipSkeleton";
import Users from "../components/users/Users";
import Members from "../components/users/Members";


//MUI stuff
import Button from "@material-ui/core/Button";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//  Icons
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";
import EditIcon from "@material-ui/icons/Edit";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn";
import GaloreDrawer from "../util/GaloreDrawer"

import Carousel from 'react-material-ui-carousel';
import image1 from "../images/Carouselimages/Bellu2Okoli.jpg"
import image2 from "../images/Carouselimages/GogoIgwemma1.jpg"
import image3 from "../images/Carouselimages/ChimezieAzuka3-1.jpg"
import image4 from "../images/Carouselimages/GogoIgwemma5.jpg"
import image5 from "../images/Carouselimages/Dady2.jpg"
import image6 from "../images/Carouselimages/Ugo3.jpg"
// import image7 from "../images/Carouselimages/culture2.jpg"
// import image8 from "../images/Carouselimages/AuntyRO1.jpg"
// import image10 from "../images/Carouselimages/AfricanStor4.jpg"
// import image11 from "../images/Carouselimages/ComputerSecurity.png"


// Redux
import { connect } from "react-redux";
import { logoutUser, uploadImage } from "../redux/actions/userActions";
import { getYips } from "../redux/actions/dataActions";

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

const initsociimages = [
  {
    image:image1,
    description: ""
  },
  {
     image:image2,
     description: ""
  },
  {
     image:image3,
     description: ""
  },
   {
     image:image4,
     description: ""
   },
   {
     image:image5,
     description: ""
   },  
   {
    image:image6,
    description: ""
   },
  //  {
  //   image:image7,
  //   description: "Variety Show"
  // },
  // {
  //   image:image8,
  //   description: "Classic"
  // },
  // {
  //   image:image9,
  //   description: ""
  // },
  // {
  //   image:image10,
  //   description: "African Store"
  // },
  // {
  //   image:image11,
  //   description: "Information Technology"
  // }

]
class galoreSocial extends Component {
  state = {
    memberelements: <div />,
  };
  componentDidMount() {
    this.props.getYips();
  }

  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
  };

  render() {
    const {
      classes,
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading,
        authenticated,
      },
    } = this.props;

    const { yips } = this.props.data;


    let recentYipsMarkup = !loading ? (
      yips.map((yip) => <Yip key={yip.yipId} yip={yip} />)
    ) : (
      <YipSkeleton />
    );
    return (
      <div>
         {!authenticated ? (
           <div className={classes.root}>
            <Grid container spacing={3}>
              {/* <Grid item xs={12}>
                  <GaloreDrawer/>
              </Grid>  */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                {/* <h2 >We are glad you are here. Please, take time to explore our Site!</h2> */}
                 <Typography variant="body2" align="center">
                    <h3> No profile found, please login again</h3>
                  </Typography>
                  <div className={classes.buttons}>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to="/login"
                    >
                      Login
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      component={Link}
                      to="/signup"
                    >
                      Signup
                    </Button>
                  </div>
                </Paper>
              </Grid>              
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  {/* <h2 >We are glad you are here. Please, take time to explore our Site!</h2> */}
                  <div class="container">
                      <Carousel>
                    {
                        initsociimages.map( 
                          (initsociimages, i) => <Fragment key={i}> <img  src={initsociimages.image} /> 
                          <p key ={i}>{initsociimages.description}</p> 
                          </Fragment>
                        )
                    }
                  </Carousel>
                    </div>

                </Paper>
              </Grid>
              {/* <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="body2" align="center">
                    <h3> No profile found, please login again</h3>
                  </Typography>
                  <div className={classes.buttons}>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to="/login"
                    >
                      Login
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      component={Link}
                      to="/signup"
                    >
                      Signup
                    </Button>
                  </div>
                </Paper>
              </Grid> */}
            </Grid>
          </div>
          ) : (
          <div>
            <Grid container>
            <Grid item sm={3} xs={12}>
              <Profile />
            </Grid>
            <Grid item sm={5} xs={12}>
              {recentYipsMarkup}
            </Grid>
            <Grid item sm={4} xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.setState({ memberelements: <Members /> });
                }}
              >
                Checkout other Memers
              </Button>

              {this.state.memberelements}
            </Grid>
          </Grid>
          </div>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  getYips: PropTypes.func.isRequired,
  data: state.data,
});

const mapActionsToProps = {
     logoutUser,
     uploadImage,
     
};

galoreSocial.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,

};

export default connect(mapStateToProps, {mapActionsToProps, getYips})(withStyles(styles)(galoreSocial));

//export default galoreSocial
