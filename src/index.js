import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import App from './Components/App';
import reducers from './reducers/logInReducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root'),
// );

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root'),
);