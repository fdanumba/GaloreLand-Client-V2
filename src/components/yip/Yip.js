import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import DeleteYip from "./DeleteYip";
import YipDialog from "./YipDialog";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import LikeButton from "./LikeButton";
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

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
  },
  image: {
    minWidth: 60,
    minHeight: 60
  },
  content: {
    padding: 25,
    objectfit: "cover",
  },
};

class Yip extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      yip: {
        body,
        createdAt,
        userImage,
        userHandle,
        yipId,
        likeCount,
        commentCount,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteYip yipId={yipId} />
      ) : null;
    return (
      <Card className={classes.card}>
        <CardMedia>
          <Button
                      component={Link}
                      to={`/users/${userHandle}`}
          >
          <Avatar
            src={userImage}
            className={classes.image}
            
          />
          </Button>
        </CardMedia>
        {/* <CardMedia
          image={userImage}
          title="Profile image"
          className={classes.image}
        /> */}
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
          {deleteButton}
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="body1">{body}</Typography>
          <LikeButton yipId={yipId} />
          <span>{likeCount} Likes</span>
          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} comments</span>
          <YipDialog
            yipId={yipId}
            userHandle={userHandle}
            openDialog={this.props.openDialog}
          />
        </CardContent>
      </Card>
    );
  }
}

Yip.propTypes = {
  user: PropTypes.object.isRequired,
  yip: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Yip));
