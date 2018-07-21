import { combineReducers } from 'redux';

import logIn from './logIn';
import fetchPosts from './fetchPosts';
import fetchComments from './fetchComments';

const rootReducer = combineReducers({
  logIn,
  fetchPosts,
  fetchComments,
})

export default rootReducer;