import React from 'react';
import { Button, Alert } from 'antd';

import styles from './App.scss';
import UserForm from '../UserForm';
import Timeline from '../Timeline/Timeline';

const LoggedInBlock = (logOut) => (
  <div>
    <Timeline />
    <Button onClick={logOut}>Log out</Button>
  </div>
);

const error = () => {
  message.error('Wrong credentials');
};

const App = ({ loggedIn, logOut, loginError }) => (
  <div className={styles.mainApp}>
    {/* {loginError && (<h2 className={styles.loginError}>Wrong credentials</h2>)} */}
    {/* {loginError && (error()) } */}
    {loginError && (<Alert className={styles.loginError} message="Wrong credentials" type="error" />) }
    {loggedIn ? LoggedInBlock(logOut) : <UserForm/>}
  </div>
);

export default App;