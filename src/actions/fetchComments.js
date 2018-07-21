import {
  REQUEST_COMMENTS,
  SUCCESS_FETCH_COMMENTS,
  FAIL_FETCH_COMMENTS,
} from '../actions/actionTypes';

import JWB_AUTH from '../lib/jwt_auth';

var jwt_instance = new JWB_AUTH();

export function fetchComments(postId) {
  return dispatch => {
    dispatch(requestComments())
    return fetch("http://localhost:3000/getComments/", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': jwt_instance.getToken(),
      },
      body: JSON.stringify(postId),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        // response.json().then(text => { throw new Error(text.error) });
        throw new Error("Error");
      }
    })
    .then(responseJson => {
      dispatch(successfulFetchComments(responseJson));
    })
    .catch(error => {
      dispatch(failedFetchComments());
    })
  }
}

const requestComments = () => ({
  type: REQUEST_COMMENTS,
});

const successfulFetchComments = payload => ({
  type: SUCCESS_FETCH_COMMENTS, payload: { [payload[0].postId]: payload }
});

const failedFetchComments = () => ({
  type: FAIL_FETCH_COMMENTS,
});