import React from 'react';

import styles from './style.scss';
import dogeimg from '../public/assets/images/doge_loaf_bloke_by_x5ync-d97fwau.jpg';

const App = () => (
  <div>
    <h1>Hello world</h1>
    <img className={styles.imgTest} src={dogeimg} />
  </div>
);

export default App;