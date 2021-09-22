import React, { Component } from 'react';
import MyButton from '../../util/MyButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//  Icons
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

//  Redux
import { connect } from 'react-redux';
import { likeYip, unlikeYip } from "../../redux/actions/dataActions";

export class LikeButton extends Component {

    likedYip = () => {
        if(
            this.props.user.likes && 
            this.props.user.likes.find(
            (like) => like.yipId === this.props.yipId
            )
        )
        return true;
        else return false;
      };
    
      likeYip = (e) => {
        e.preventDefault()
        console.log('this.props event', this.props )
        this.props.likeYip(this.props.yipId);
      };
    
      unlikeYip = () => {
        this.props.unlikeYip(this.props.yipId);
      };
    
    render() {
        const {authenticated}  = this.props.user;
        console.log("Yes authenticated", authenticated)
        const likeButton = !authenticated ? (
            <Link to="/login">
            <MyButton tip="Like">
                <FavoriteBorder color="primary"/>
            </MyButton>
            </Link>


          ) : (
            this.likedYip() ? (
              <MyButton tip={"Undo like"} onClick={this.unlikeYip}>
                <FavoriteIcon color="primary"/>
              </MyButton>
            ) : (
              <MyButton tip="like" onClick={this.likeYip}>
              <FavoriteBorder color="primary"/>
            </MyButton>       
            )
          );        
        return likeButton;
    }
}

LikeButton.propTypes = {
    user: PropTypes.object.isRequired,
    yipId: PropTypes.string.isRequired,
    likeYip: PropTypes.func.isRequired,
    unlikeYip: PropTypes.func.isRequired
   
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapActionsToProps = {
    likeYip,
    unlikeYip
}


export default connect(mapStateToProps, mapActionsToProps)(LikeButton);
