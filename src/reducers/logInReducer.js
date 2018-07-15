import { LOG_IN_REQUEST, LOG_IN_SUCCESSFUL, LOG_IN_FAIL, LOG_OUT } from '../actions/actionTypes';

import JWB_AUTH from '../lib/jwt_auth';

var jwt_instance = new JWB_AUTH();

const initialState = {
  isRequestingLogIn: false,
  loggedIn: jwt_instance.loggedIn(),
  loginError: false,
};

export default function logInReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return { ...state, isRequestingLogIn: true };
    case LOG_IN_SUCCESSFUL:
      return { ...state, loggedIn: true };
    case LOG_IN_FAIL:
      return { ...state, loggedIn: false, loginError: true };
    case LOG_OUT:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
}