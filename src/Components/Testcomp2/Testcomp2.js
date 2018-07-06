import React from 'react';
import { DatePicker } from 'antd';

import styles from './Testcomp2.scss';

const Testcomp2 = () => (
  <div>
    <p class={styles.paragraph}>Second component</p>
    <DatePicker />
  </div>
);

export default Testcomp2;