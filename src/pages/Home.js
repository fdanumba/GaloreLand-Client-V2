// import React, { Component, useRef, useCallback, useState,useEffect, PureComponent  } from "react";

// import Grid from "@material-ui/core/Grid";
// import PropTypes from "prop-types";

// import axios from "axios";

// import Yip from "../components/yip/Yip";
// import Profile from "../components/profile/profile";

// import DubemBlue from "../images/membersImages/DubemBlue.JPG";
// import AppIcon1 from "../images/membersImages/AfricanGloreLogo-3.PNG";

// import YipSkeleton from "../util/YipSkeleton";
// import Users from "../components/users/Users";
// import Members from "../components/users/Members";

// import "@material/drawer";
// import "@material/list";
// import withStyles from "@material-ui/core/styles/withStyles";

// import { Button } from "@material-ui/core";

// import { connect } from "react-redux";
// import { getYips } from "../redux/actions/dataActions";

// import HomeIcon from "@material-ui/icons/Home";
// import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
// import AnnouncementIcon from "@material-ui/icons/Announcement";
// import SportsIcon from "@material-ui/icons/Sports";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Paper from "@material-ui/core/Paper";
// import { Link } from "react-router-dom";

// // import Webcam from "react-webcam";

// // import Datetime from 'react-datetime';
// // import "react-datetime/css/react-datetime.css";

// //import { CameraRoll } from "react-native";

// // import Screenshot from 'react-screenshots'
// // import 'react-screenshots/dist/react-screenshots.css'

// const styles = (theme) => ({
//   ...theme.spreadIt,
//   // root: {
//   //   display: 'flex',
//   //   flexWrap: 'wrap',
//   //   '& > *': {
//   //     margin: theme.spacing(1),
//   //     width: theme.spacing(16),
//   //     height: theme.spacing(16),
//   //   },
//   // }
//   // gridRoot: {
//   //   color: theme.palette.text.primary,
//   // }
// });

// // const WebcamComponent = () => <Webcam />;

// const videoConstraints = {
//   width: 600,
//   height: 600,
//   facingMode: "user"
// };

// function Home(props) {

//   // const webcamRef = useRef(null);

//   const [memberelements, setMemberelements] = useState(<div />);
//   useEffect(() => {
//     props.getYips();
//   });

//   const { yips, loading } = props.data;
//   const { authenticated, loggedIn } = props.user;
//   const glcapturedimages = 'C:\Users\fdanu\firebase\galoreland-client\src\images\CapturedImages'
//   // const classes = styles();

//   // const capture = useCallback(() => {
//   //   const imageSrc = webcamRef.current.getScreenshot();
//   //   glcapturedimages = glcapturedimages+this.current.Datetime() +imageSrc;
//   // }, [webcamRef]);

//   let recentYipsMarkup = !loading ? (
//     yips.map((yip) => <Yip key={yip.yipId} yip={yip} />)
//   ) : (
//     <YipSkeleton />
//   );
//   return (
//     <div>
//       {authenticated ? (
//         <Grid container>
//           <Grid item sm={3} xs={12}>
//             <Profile />
//           </Grid>
//           <Grid item sm={5} xs={12}>
//             {recentYipsMarkup}
//           </Grid>
//           <Grid item sm={4} xs={12}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => {
//                 setMemberelements(<Members />);
//               }}
//             >
//               Checkout other Memers
//             </Button>

//             {memberelements}
//           </Grid>
//         </Grid>
//       ) : (
//         <Grid container>
//           <Grid item sm={6} xs={12}>
//             <img src={AppIcon1} alt="Globe logo" />
//           </Grid>
//           {/* <Grid item sm={6} xs={12}>
//             <Webcam
//               audio={false}
//               height={720}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               width={1280}
//               videoConstraints={videoConstraints}
//             />
//             <button onClick={capture}>Capture photo</button>
//           </Grid> */}
//         </Grid>
//       )}
//     </div>
//   );
// }

// Home.propTypes = {
//   user: PropTypes.object.isRequired,
//   getYips: PropTypes.func.isRequired,
//   data: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   user: state.user,
//   data: state.data,
// });

// export default connect(mapStateToProps, { getYips })(Home);

import React, { Component, useRef, useCallback } from "react";

import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import axios from "axios";

import Yip from "../components/yip/Yip";
import Profile from "../components/profile/profile";

import DubemBlue from "../images/membersImages/DubemBlue.JPG";
import AppIcon1 from "../images/membersImages/AfricanGloreLogo-3.PNG";

import YipSkeleton from "../util/YipSkeleton";
import Users from "../components/users/Users";
import Members from "../components/users/Members";
import GaloreDrawer from "../util/GaloreDrawer";

import "@material/drawer";
import "@material/list";
import withStyles from "@material-ui/core/styles/withStyles";

import { Button } from "@material-ui/core";

import { connect } from "react-redux";
import { getYips } from "../redux/actions/dataActions";

import HomeIcon from "@material-ui/icons/Home";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import SportsIcon from "@material-ui/icons/Sports";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import Navbar from "../components/layout/Navbar";

import Carousel from "react-material-ui-carousel";
import image1 from "../images/Carouselimages/adorasam.jpg";
import image2 from "../images/Carouselimages/JenHairdoFashion1.png";
import image3 from "../images/Carouselimages/ladies.png";
import image4 from "../images/Carouselimages/Nova.jpg";
import image5 from "../images/Carouselimages/nnamdi-asomugha1.jpg";
import image6 from "../images/Carouselimages/FaithAnumba3.jpg";
import image7 from "../images/Carouselimages/culture2.jpg";
import image8 from "../images/Carouselimages/AuntyRO1.jpg";
import image10 from "../images/Carouselimages/AfricanStor4.jpg";
import image11 from "../images/Carouselimages/ComputerSecurity.png";
import { Fragment } from "react";

const styles = (theme) => ({
  ...theme.spreadIt,
  // root: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   '& > *': {
  //     margin: theme.spacing(1),
  //     width: theme.spacing(16),
  //     height: theme.spacing(16),
  //   },
  // }
  // gridRoot: {
  //   color: theme.palette.text.primary,
  // }
  carousel_img: {
    width: "350px",
  },
});

const membersl = [
  {
    firstName: "Felicitas",
    middleName: "Dubem",
    lastName: "Anumba",
    age: "26",
    height: "6.5",
    town: "Awka-Etiti",
    state: "Anambra",
    tribe: "Igbo",
    email: "fdanumba@gmail.com",
    createdAt: "2020-09-09T01:07:31.609Z",
    memberImage: DubemBlue,
    complexion: "Dark",
    phone: "818-523-6270",
    available: true,
  },
  {
    firstName: "Felicitas",
    middleName: "Dubem",
    lastName: "Anumba",
    age: "26",
    height: "6.5",
    town: "Awka-Etiti",
    state: "Anambra",
    tribe: "Igbo",
    email: "fdanumba@gmail.com",
    createdAt: "2020-09-09T01:07:31.609Z",
    memberImage: DubemBlue,
    complexion: "Dark",
    phone: "818-523-6270",
    available: true,
  },
  {
    firstName: "Felicitas",
    middleName: "Dubem",
    lastName: "Anumba",
    age: "26",
    height: "6.5",
    town: "Awka-Etiti",
    state: "Anambra",
    tribe: "Igbo",
    email: "fdanumba@gmail.com",
    createdAt: "2020-09-09T01:07:31.609Z",
    memberImage: DubemBlue,
    complexion: "Dark",
    phone: "818-523-6270",
    available: true,
  },
];

const initsociimages = [
  {
    image: image1,
    description: "Get hooked up",
  },
  {
    image: image2,
    description: "Meet exotic people ",
  },
];

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

//  const webcamRef = useRef(null);

class Home extends Component {
  state = {
    memberelements: <div />,
  };
  componentDidMount() {
    this.props.getYips();
  }

  // let webcamRef = React.useRef(null);

  // gohome =()=>{
  //   <Router>
  //     <Route exact key={0} Path="/" component={home} />
  //   </Router>
  // }
  render() {
    const { yips, loading } = this.props.data;
    const { authenticated, loggedIn } = this.props.user;

    // const classes = styles();

    // const capture = React.useCallback(
    //   () => {
    //     const imageSrc = webcamRef.current.getScreenshot();
    //   },
    //   [webcamRef]
    // );

    let recentYipsMarkup = !loading ? (
      yips.map((yip) => <Yip key={yip.yipId} yip={yip} />)
    ) : (
      <YipSkeleton />
    );

    return (
      <div>
        <Navbar authenticated={authenticated} />
        {
          <div>
            <div>
              {" "}
              <h2 style={{ textAlign: "center" }} Position="absolute">
                Welcome to LetsConnect!
              </h2>
            </div>
            <div>
              <Grid
                container
                justify="center"
                alignItems="center"
                Position="absolute"
              >
                {/* <Grid item xs={5} >
                  <GaloreDrawer/>
                </Grid> */}
                <Grid item xs={7}>
                  <div>
                    <Carousel>
                      {initsociimages.map((initsociimages, i) => (
                        <Fragment key={i}>
                          {" "}
                          <img
                            className="carousel_img"
                            src={initsociimages.image}
                          />
                          <p>{initsociimages.description}</p>
                        </Fragment>
                      ))}
                    </Carousel>
                  </div>
                  {/* <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
              />
              <button onClick={capture}>Capture photo</button> */}
                </Grid>
              </Grid>
            </div>
          </div>
          // )
        }
      </div>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object.isRequired,
  getYips: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});

export default connect(mapStateToProps, { getYips })(Home);
