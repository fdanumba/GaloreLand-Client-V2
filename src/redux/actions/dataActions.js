import {
  SET_YIP,
  SET_YIPS,
  LOADING_DATA,
  LIKE_YIP,
  UNLIKE_YIP,
  DELETE_YIP,
  CLEAR_ERRORS,
  SET_ERRORS,
  POST_YIP,
  LOADING_UI,
  STOP_LOADING_UI,
  SUBMIT_COMMENT,
  LOADING_MEMBERS,
  SET_MEMBERS
} from "../types";
import axios from "axios";

//Get all yips
export const getYips = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/yips")
    .then((res) => {
      dispatch({
        type: SET_YIPS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_YIPS,
        payload: []
      });
    });
};

//Get all members
export const getAllMembers = () => (dispatch) => {
  dispatch({ type: LOADING_MEMBERS });
  axios
    .get("/members")
    .then((res) => {
      dispatch({
        type: SET_MEMBERS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_MEMBERS,
        payload: []
      });
    });
};


export const getYip = (yipId) => dispatch => {
  dispatch({ type: LOADING_UI});
  axios.get(`/yip/${yipId}`)
    .then(res => {
      dispatch({
        type: SET_YIP,
        payload: res.data
      });
      dispatch({type: STOP_LOADING_UI})
    })
    .catch(err => console.log(err) );
}

//  Post a yip
export const postYip = (newYip) => (dispatch) => {
  dispatch({type: LOADING_UI});
  axios.post('/yip', newYip)
  .then(res => {
    dispatch({
      type: POST_YIP,
      payload: res.data
    });
    dispatch(clearErrors())
  })
  .catch(err =>{
    dispatch ({
      type: SET_ERRORS,
      payload: err.response.data
    })
  })
}
// Like a yip
export const likeYip = (yipId) => (dispatch) => {
  console.log("I am liking yip:", yipId)
  axios
    .get(`/yip/${yipId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_YIP,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//Submit a yip
export const submitComment = (yipId, commentData) => (dispatch) => {
  axios.post(`/yip/${yipId}/comment`, commentData)
    .then(res => {
      dispatch({
        type: SUBMIT_COMMENT,
        payload: res.data
      });
      dispatch(clearErrors());
     })
     .catch(err => {
       dispatch({
         type: SET_ERRORS,
         payload: err.response.data
       })
     })
  }

//Unlike a yip
export const unlikeYip = (yipId) => (dispatch) => {
  axios
    .get(`/yip/${yipId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_YIP,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//Submit a comment

export const deleteYip = (yipId) => (dispatch) => {
  console.log("I was at delete yip", {yipId})
  axios.delete(`/yip/${yipId}`)
    .then(() => {
      dispatch({ type: DELETE_YIP, payload: yipId })
    })
    .catch(err => console.log(err));
};


export const getUserData = (userHandle) => dispatch  => {
  dispatch({type: LOADING_DATA});
  axios.get(`/user/${userHandle}`)
  .then(res => {
    dispatch({
      type: SET_YIPS,
      payload: res.data.yips
    });
  })
  .catch(() => {
    dispatch({
      type: SET_YIPS,
      payload: null
    })
  })
}


export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS});
}
