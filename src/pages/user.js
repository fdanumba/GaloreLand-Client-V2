import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Yip from '../components/yip/Yip';
import StaticProfile from '../components/profile/StaticProfile'
import Grid from '@material-ui/core/Grid';

import YipSkeleton from '../util/YipSkeleton'
import ProfileSkeleton from '../util/ProfileSkeleton'

import { connect } from 'react-redux';
import { getUserData, getAllMembers } from '../redux/actions/dataActions';

class user extends Component {

    state = {
        profile: null,
        yipIdParam: null
    }
    componentDidMount(){
        const handle = this.props.match.params.handle;
        const yipId = this.props.match.params.yipId;

        if(yipId) this.setState({ yipIdParam: yipId});

        this.props.getUserData(handle);
        axios.get(`/user/${handle}`)
            .then(res => {
                this.setState({
                    profile: res.data.user
                })
            })
            .catch(err => console.log(err))
    }
    render() {

        const { yips, loading } = this.props.data;
        const { yipIdParam } = this.state;
        const yipsMarkup = loading ? (
            <YipSkeleton/>
        ) : yips === null ? (
            <p>No yips from this user</p>
        ) : !yipIdParam ? (
                yips.map(yip => <Yip key={yip.yipId} yip={yip} />)
        ) : (
            yips.map(yip => {
               if(yip.yipId !== yipIdParam) 
               return <Yip key={yip.yipId} yip={yip} />
               else return <Yip key={yip.yipId} yip={yip} openDialog/>
            })
        )
        return (
            <Grid container spacing={10}>
            <Grid item sm={8} xs={12}>
              {yipsMarkup}
            </Grid>
            <Grid item sm={4} xs={12}>
                {this.state.profile === null ? (
                    <ProfileSkeleton/>
                ): (<StaticProfile  profile={this.state.profile}/>)}
            </Grid>
          </Grid>
        )
    }
}

user.propTypes = {
    getUserData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    data: state.data
})



export default connect(mapStateToProps, {getUserData})(user);
