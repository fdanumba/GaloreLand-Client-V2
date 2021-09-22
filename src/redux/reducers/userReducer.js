import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LIKE_YIP,
  UNLIKE_YIP, MARK_NOTIFICATIONS_READ,
  LOADING_MEMBERS,
  SET_MEMBERS,

} from "../types"; 

const initialState = {
  authenticated: false,
  loading: false,
    credentials: {},
  likes: [],
  notifications: [],
  loggedIn: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        loading: true,
        loggedIn: true,

      };
    case SET_UNAUTHENTICATED:
      return initialState;
      
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload,
        loggedIn: false,
      };

      case SET_MEMBERS:
      return {
        ...state,
        members: [
          ...action.payload,
        ],
        loading: false,
      };    
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };

      case LOADING_MEMBERS:
      return {
        ...state,
        loading: true,
      };
    
      case LIKE_YIP:
        return{
          ...state,
          likes: [
            ...state.likes,
            {
              userHandle: state.credentials.handle,
              yipId: action.payload.yipId
            }
          ]
        }
    case UNLIKE_YIP:
      return {
        ...state,
        likes: state.likes.filter(
          (like) => like.yipId !== action.payload.yipId
        )
      }
    case MARK_NOTIFICATIONS_READ:
      state.notifications.forEach(noti => noti.read = true)
      return {
        ...state
      }

    default:
      return state;
  }
}
