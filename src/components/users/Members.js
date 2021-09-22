import React, { Component, useEffect } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { makeStyles } from "@material-ui/core/styles";
import { getAllMembers } from "../../redux/actions/dataActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import axios from 'axios';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { render } from "@testing-library/react";
import { Button } from "@material-ui/core";
import { LOADING_MEMBERS } from "../../redux/types";

const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
    width: "100%",
  },
  image: {
    minWidth: 100,
  },
  content: {
    padding: 25,
    objectfit: "cover",
  },
}));

class Members extends Component {
    state= {
        members:[

        ]
      }
   

    componentDidMount() {
        this.props.getAllMembers();

        // axios.get('/members')
        //     .then(res => {
        //         //  console.log(res.data);
        //         this.setState({
        //             members: res.data
        //         })
        //     })
        //     .catch(err => console.log(err))
      }

  render() {
      const {classes, loading, members } = this.props
    //   const members = this.state.members
      console.log("from GetAll",loading, this.props.members);


   if(!members ){
      return <div />     
   }
    // let allMembers = !loading ? (
    //   members.map((user) => <Users key={user.userId}  user={user}/>)
    // ) : (
    //   <Grid />
    // );
    return (
      <List className={classes.root}>
        {members.map((item, index) => {
          return (
            <div key={index}>
              <Card className={classes.card}>
                <CardMedia
                // image={item.memberImage}
                // title="Profile image"
                // className={classes.image}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={item.firstName}
                      src={item.userImage}
                      className={classes.large}
                    />
                  </ListItemAvatar>
                </CardMedia>
                <CardContent>
                  <ListItemText
                    primary={`${item.firstName} ${item.middleName} ${item.lastName}`}
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {`Age: ${item.age}yrs,   height: ${item.hieght}`}
                        <br />
                        {`Complexion: ${item.complexion}`}
                        <br />
                        {`Profession: ${item.courseOfStudy}`}
                        <br />                        
                        {`State: ${item.state}, Tribe: ${item.tribe}`}
                        <br />
                        {`Town: ${item.town}`}
                        <br />
                        {`Email: ${item.email}`}
                        <br />
                        {`Phone: ${item.phone} `}
                        <br />
                        {`Available: ${item.available}`}
                        <br />
                      </Typography>
                    }
                  />
                </CardContent>
              </Card>
            </div>
          );
        })}
      </List>
    );
  }
}

const mapStateToProps = (state) => ({
  members: state.user.members,
});
export default connect(mapStateToProps, { getAllMembers })(withStyles(styles)(Members));
