import { LOGIN_SUCCESS } from "../actions/Types";

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
    default:
      return state;
  }
}
