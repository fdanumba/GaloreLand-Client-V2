import React, { Component } from 'react';


// MUI stuff
import { makeStyles } from '@material-ui/core/styles';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    }
  
}));
    
const styles = {
    card: {
        display: 'flex'
    }

}

 class Yip extends Component {
    render() {
        const  classes = useStyles;
        const { yip : { body, createdAt, userImage, userHandle, yipId, likeCount, commentCount } } = this.props;
        return (
            <Card className={classes.root}>
                <div className={classes.details}>
                <CardMedia
                className={classes.cover}
                image={userImage}
                title="Profile image"
                />
                <CardContent className={classes.content}>
                    <Typography variant="h5">{userHandle}</Typography>
                    <Typography variant="body2" color="textSecondary">{createdAt}</Typography>
                    <Typography variant="body1">{body}</Typography>
                </CardContent>
                   
                </div>
            </Card>
        )
    }
}

export default Yip
