import { authenticateUser } from "../action/userAction";

const initialState = {
  loading: false,
  user: null,
  userToken: null,
  error: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case authenticateUser.pending:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case authenticateUser.fulfilled:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        userToken: action.payload.user.id,
        error: ''
      };
    case authenticateUser.rejected:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null,
        userToken: null
      };
    default:
      return state;
  }
};


export default userReducer;
