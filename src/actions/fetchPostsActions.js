import {
  SUCCESS_FETCH_POSTS,
  FAIL_FETCH_POSTS,
  REQUEST_POST
} from './actionTypes';

import JWB_AUTH from '../lib/jwt_auth';

var jwt_instance = new JWB_AUTH();

export function fetchPosts(currentInitChunk, currentEndChunk) {
  console.log(currentInitChunk);
  return dispatch => {
    dispatch(requestPosts())
    return fetch("http://localhost:3000/getPosts", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': jwt_instance.getToken(),
      },
      body: JSON.stringify({ currentInitChunk, currentEndChunk }),
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        // response.json().then(text => { throw new Error(text.error) });
        throw new Error("Error")
      }
    })
    .then(responseJson => {
      dispatch(successfulFetch(responseJson));
    })
    .catch((error) => {
      dispatch(failedFetch(error))
    })
  }
}

const requestPosts = () => ({
  type: REQUEST_POST,
})

const successfulFetch = payload => ({
  type: SUCCESS_FETCH_POSTS, payload
});

const failedFetch = error => ({
  type: FAIL_FETCH_POSTS
});
