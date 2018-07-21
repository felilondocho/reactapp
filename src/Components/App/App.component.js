import React from 'react';
import { Button } from 'antd';

import styles from './App.scss';
import UserForm from '../UserForm';
import Timeline from '../Timeline/Timeline';

const LoggedInBlock = (logOut) => (
  <div>
    <Timeline />
    <Button onClick={logOut}>Log out</Button>
  </div>
);

const App = ({ loggedIn, logOut, loginError }) => (
  <div className={styles.mainApp}>
    {loggedIn ? LoggedInBlock(logOut) : <UserForm/>}
    {loginError && (<p>Wrong credentials</p>)}
  </div>
);

export default App;