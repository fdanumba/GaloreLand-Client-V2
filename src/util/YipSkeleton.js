import React, { Fragment } from "react";
import NoImg from "../images/NoImg.png";
import PropTypes from "prop-types";
//  MUI
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import withStyles from "@material-ui/core/styles/withStyles";
// import { SportsRugbySharp } from '@material-ui/icons';

const styles = (theme) => ({
  card: {
    display: "flex",
    marginBottom: 20,
  },
  cardContent: {
    width: "100%",
    flexDirection: "column",
    padding: 25,
  },
  cover: {
    minWidth: 100,
    objectFit: 100,
  },
  handle: {
    width: 60,
    height: 18,
    backgroundColor: theme.palette.primary.main,
    marginBottom: 7,
  },
  date: {
    height: 14,
    with: 100,
    backgroundColor: "rgba(0,0,0,0.3)",
    marginBottom: 10,
  },
  fullLine: {
    height: 15,
    with: "90%",
    backgroundColor: "rgba(0,0,0,0.6)",
    marginBottom: 10,
  },
  halfLine: {
    height: 15,
    with: "50%",
    backgroundColor: "rgba(0,0,0,0.6)",
    marginBottom: 10,
  },
});

const skeletonImageStyle = {
  height: 100,
  width: 100,
  borderRadius: "50%",
  objectFit: "cover",
  marginTop: "30%",
  marginLeft: "15%",
};

const YipSkeleton = (props) => {
  const { classes } = props;

  const content = Array.from({ length: 5 }).map((item, index) => (
    <Card className={classes.Card} key={index}>
      <CardMedia className={classes.cover}>
        <img src={NoImg} alt="" style={skeletonImageStyle} />
      </CardMedia>
      <CardContent className={classes.cardContent}>
        <div className={classes.handle} />
        <div className={classes.date} />
        <div className={classes.fullLine} />
        <div className={classes.fullLine} />
        <div className={classes.halfLine} />
      </CardContent>
    </Card>
  ));
  return <Fragment> {content}</Fragment>;
};

YipSkeleton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(YipSkeleton);
