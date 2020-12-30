import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/Types";

const initialState = {
  isAuthenticated: false,
};

export default function User(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        payload: action.payload.user,
      };
      case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
