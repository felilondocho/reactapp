import React from 'react';
import { Button } from 'antd';

import styles from './Testcomp.scss';
import dogeimg from '../../../public/assets/images/doge_loaf_bloke_by_x5ync-d97fwau.jpg';

const Testcomp = () => (
  <div>
    <h1>Hello world</h1>
    <img className={styles.imgTest} src={dogeimg} />
    <Button type='primary'>Test</Button>
  </div>
);

export default Testcomp;