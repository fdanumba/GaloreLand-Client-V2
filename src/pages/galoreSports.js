import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
// import EditDetails from "./EditDetails";
import MyButton from "../util/MyButton";
import ProfileSkeleton from "../util/ProfileSkeleton";

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

import Carousel from "react-material-ui-carousel";
import image1 from "../images/Carouselimages/Bellu2Okoli.jpg";
import image2 from "../images/Carouselimages/GogoIgwemma1.jpg";
import image3 from "../images/Carouselimages/ChimezieAzuka3-1.jpg";
import image4 from "../images/Carouselimages/GogoIgwemma5.jpg";
import image5 from "../images/Carouselimages/Dady2.jpg";
import image6 from "../images/Carouselimages/Ugo3.jpg";
import ReactPlayer from "react-player";
import Shinkafa from "../images/Sports/Shinkafa.mp4";
import GaloreDrawer from "../util/GaloreDrawer";


// import image7 from "../images/Carouselimages/culture2.jpg"
// import image8 from "../images/Carouselimages/AuntyRO1.jpg"
// import image10 from "../images/Carouselimages/AfricanStor4.jpg"
// import image11 from "../images/Carouselimages/ComputerSecurity.png"

// Redux
import { connect } from "react-redux";
import { logoutUser, uploadImage } from "../redux/actions/userActions";

// const styles = (theme) => ({
//   ...theme.spreadIt,
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// });

class galoreSports extends Component {
  render() {
    //const classes = styles();
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <GaloreDrawer />
          </Grid>
          <Grid item xs={12}>
             <Paper Padding= "2" alignContent="right">
              Featured Elite Podcasts
              <ReactPlayer source={{ Shinkafa }}>{Shinkafa}</ReactPlayer>
            </Paper> 
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper>Top Prospects</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>Recruiting News</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>Join</Paper>
          </Grid>
        </Grid>

        {/* 
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
              </Grid> */}
      </div>
    );
  }
}

export default galoreSports;
