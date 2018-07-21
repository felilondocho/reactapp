import { 
  SUCCESS_FETCH_POSTS,
  FAIL_FETCH_POSTS,
  REQUEST_POST  
} from '../actions/actionTypes';

const initialState = {
  posts: [],
  isFetching: false,
  fetchError: false,
  currentInitChunk: 0,
  currentEndChunk: 5,
};

export default function fetchPosts(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POST:
      return { ...state, isFetching: true }
    case SUCCESS_FETCH_POSTS:
      return {
        ...state, 
        isFetching: false, 
        posts: [...state.posts, ...action.payload],
        currentInitChunk: state.currentInitChunk + 5,
        currentEndChunk: state.currentEndChunk + 5,
      };
    case FAIL_FETCH_POSTS:
      return { ...state, isFetching: false, fetchError: true }; 
    default:
      return state;
  }
}