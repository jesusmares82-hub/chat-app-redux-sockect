
import axios from "axios";

export const types = {
  login: "LOGIN",
  loginSuccess: "LOGIN_SUCCESS",
  loginFail: "LOGIN_FAIL",
  signup: "SIGNUP",
  signupSuccess: "SIGNUP_SUCCESS",
  signupFail: "SIGNUP_FAIL",
};

export const login = (room) => ({
  type: types.login,
  payload: room,
});

export const loginSuccess = (auth) => ({
  type: types.loginSuccess,
  payload: auth,
});

export const loginFail = (err) => ({
  type: types.loginFail,
  payload: err,
});



export const loginThunk = (loginFormData) => {
  const { email, password, room } = loginFormData;
  
  return (dispatch) => {
    dispatch(login(room));

    return axios
      .post("https://academlo-chat.herokuapp.com/api/users/login", {
        email,
        password,
      })
      .then((res) => dispatch(loginSuccess(res.data)))
      .catch((err) => dispatch(loginFail(err)));
  };
};

export const signup = (room) => ({
  type: types.signup,
  payload: room,
});

export const signupSuccess = (auth) => ({
  type: types.signupSuccess,
  payload: auth,
});

export const signupFail = (err) => ({
  type: types.signupFail,
  payload: err,
});


export const signupThunk = (signupFormData) => {
  const { email, username, password, room } = signupFormData;
  return (dispatch) => {
    dispatch(signup(room));

    return axios
      .post("https://academlo-chat.herokuapp.com/api/users/signup", {
        email,
        username,
        password,
      })
      .then((res) => dispatch(signupSuccess(res.data)))
      .catch((err) => dispatch(signupFail(err)));
  };
};