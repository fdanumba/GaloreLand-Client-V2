import {
  SET_YIPS,
  LOADING_DATA,
  UNLIKE_YIP,
  LIKE_YIP,
  DELETE_YIP,
  POST_YIP,
  SET_YIP,
  SUBMIT_COMMENT
} from "../types";
const initialState = {
  yips: [],
  yip: {},
  loading: false,
};

export default function (state = initialState, action) {
  let index;
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_YIPS:
      return {
        ...state,
        yips: action.payload,
        loading: false,
      };
    case SET_YIP:
      return {
        ...state,
        yip: action.payload
      }

    case LIKE_YIP:
    case UNLIKE_YIP:
       index = state.yips.findIndex(
        (yip) => yip.yipId === action.payload.yipId
      );
      state.yips[index] = action.payload;
      if(state.yip.yipId === action.payload.yipId){
        this.state.yip = action.payload;
      }
      return {
        ...state,
      };
    case DELETE_YIP:
      index = state.yips.findIndex(
        (yip) => yip.yipId === action.payload
      );
      state.yips.splice(index, 1);
      return {
        ...state,
      };
      case POST_YIP:
        return{
          ...state,
          yips: [
            action.payload,
            ...state.yips
          ]
        };
      case SUBMIT_COMMENT:
        return{
          ...state,
          yip: {
            ...state.yip,
            comment: [action.payload, ...state.yip.comments]
          }

        }
    default:
      return state;
  }
}
