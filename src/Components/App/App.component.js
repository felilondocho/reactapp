import React from 'react';

import styles from './App.scss';
import UserForm from '../UserForm';
import { Button } from 'antd';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     var jwt_instance = new JWB_AUTH();
//     jwt_instance.tokenExist
//   }
// }

const App = ({ loggedIn, logOut }) => (
  <div className={styles.mainApp}>
  {loggedIn ?
    <div>
      <p>Logged in!</p>
      <Button onClick={logOut}>Log out</Button>
    </div>
    :
    <UserForm />
  }
  </div>
);

export default App;