import { LOG_IN_REQUEST, LOG_IN_SUCCESSFUL, LOG_IN_FAIL, LOG_OUT } from './actionTypes';

import JWB_AUTH from '../lib/jwt_auth';

var jwt_instance = new JWB_AUTH();

export function logIn(logInInfo) {
  return dispatch => {
    dispatch(sendLogInInfo())
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(logInInfo)
    })
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(responseToken => {
      dispatch(successfulLogIn(responseToken))
    })
    .catch((error) => {
      dispatch(failedLogIn())
    });
  }
}

export const sendLogInInfo = () => ({
  type: LOG_IN_REQUEST,
});

function successfulLogIn(jwt_id) {
  jwt_instance.setToken(jwt_id);
  return { type: LOG_IN_SUCCESSFUL };
}

export const failedLogIn = () => ({
  type: LOG_IN_FAIL,
});

export function logOut() {
  jwt_instance.removeToken();
  return { type: LOG_OUT };
}