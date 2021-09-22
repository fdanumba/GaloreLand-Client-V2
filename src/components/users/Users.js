import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
// MUI stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//  Icons
import ChatIcon from "@material-ui/icons/Chat";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

//  Redux
import { connect } from "react-redux";

import { getAllMembers } from '../../redux/actions/dataActions';

const styles = {
  card: {
    position: 'relative',
    display: "flex",
    marginBottom: 20,
  },
  image: {
    minWidth: 200,
  },
  content: {
    padding: 25,
    objectfit: "cover",
  },
};

class Users extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      members: {
          firstName,
          middleName,
          lastName,
          age,
          height,
          town,
          state,
          tribe,
          email,
        createdAt,
        userImage,
        userHandle,
        userId,
      },
      user: {
        authenticated, credentials: {handle}
      }
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <span>
          </span>
          <MyButton tip="comments">
            <ChatIcon color="primary"/>
          </MyButton>
        </CardContent>
      </Card>
    );
  }
}

Users.propTypes = {

  getAllMembers: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(
  mapStateToProps,getAllMembers
)(withStyles(styles)(Users));

