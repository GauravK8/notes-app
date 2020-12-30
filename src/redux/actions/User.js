import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./Types";

export const login = (username, password) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.username === username && user.password === password) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user },
      });
      resolve();
    } else {
      reject();
    }
  });
};

export const logout = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
    resolve();
  });
};
