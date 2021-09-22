import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles  from "@material-ui/core/styles/withStyles";
import MyButton from "../../util/MyButton";
import LikeButton  from "./LikeButton";
import Comments from './Comments';
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import CommentForm from './CommentForm'

// MUI Stuff
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// Icons
import CloseIcon from "@material-ui/icons/Close";
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import ChatIcon from "@material-ui/icons/Chat";

//  Redux stuff
import { connect } from "react-redux";
import { getYip, clearErrors } from "../../redux/actions/dataActions";
// import { DesktopWindowsRounded } from "@material-ui/icons";

const styles = (theme) => ({
  ...theme.spreadIt,
  profileImage: {
    maxWidth: 200,
    height: 200,
    borderRadius: "50%",
    objectFit: "cover",
  },
  dialogContent: {
    padding: 20,
  },
  closeButton: {
    position: "absolute",
    left: "90%",
  },
  expandButton: {
    position: "absolute",
    left: "90%",
  },
  spinnerDiv: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50,
  },
});

class YipDialog extends Component {
  state = {
    open: false,
    oldPath: '',
    newPath: ''
  };
  componentDidMount (){
    if(this.props.openDialog)
      this.handleOpen();
  }
  handleOpen = () => {
    let oldPath = window.location.pathname;

    const { userHandle, yipId } = this.props;
    const newPath = `/users/${userHandle}/yip/${yipId}`;

    if(oldPath === newPath) oldPath = `/users/${userHandle}`;
    window.history.pushState(null, null, newPath);

    this.setState({ open: true, oldPath, newPath});
    this.props.getYip(this.props.yipId);
  };
  handleClose = () => {
    window.history.pushState(null, null, this.state.oldPath);
    this.setState({ open: false });
    this.props.clearErrors();
  };

  render() {
    const {
      classes,
      yip: {
        yipId,
        body,
        createdAt,
        likeCount,
        commentCount,
        userImage,
        userHandle,
        comments
      },
      UI: { loading },
    } = this.props;
    const dialogMarkup = loading ? (
      <div className={classes.spinnerDiv}>
        <CircularProgress size={200} thickness={2} />
      </div>
    ) : (
      <Grid container spacing={10}>
        <Grid item sm={5}>
          <img src={userImage} alt="Profile" className={classes.profileImage} />
        </Grid>
        <Grid item sm={7}>
          <Typography
            component={Link}
            color="primary"
            variant="h5"
            to={`/users/${userHandle}`}
          >
            @{userHandle}
          </Typography>
          <hr className={classes.invisibleSeparator} />
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}
          </Typography>
          <hr className={classes.invisibleSeparator} />
          <Typography variant="body1">{body}</Typography>
           <LikeButton yipId={yipId} /> 
          <span>{likeCount} Likes</span>

          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} comments</span>
        </Grid>
        <hr className={classes.visibleSeeparator}/>
        <CommentForm yipId={yipId} />
        <Comments comments={comments}/>
      </Grid>
    );
    return (
      <Fragment>
        <MyButton
          onClick={this.handleOpen}
          tip="Expand yip"
          tipClassName={classes.expandButton}
        >
          <UnfoldMore color="primary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleOpen}
          fullWidth
          maxWidth="sm"
        >
          <MyButton
            tip="Close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </MyButton>
          <DialogContent className={classes.dialogContent}>
            {dialogMarkup}
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

YipDialog.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  getYip: PropTypes.func.isRequired,
  yipId: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  yip: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  yip: state.data.yip,
  UI: state.UI
});

const mapActionsToProps = {
  getYip,
  clearErrors
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(YipDialog));