import React from 'react';
import Fade from 'react-reveal/Fade';

import styles from './parallax.module.scss';

const Parallax = () => (
  <div className={styles.background}>
    <div className={styles.info}>
      <Fade left duration={1000} distance="60px">
        <p>
          {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tempora quod. Molestias provident ab eaque et.'.toUpperCase()}
        </p>
      </Fade>
    </div>
  </div>
);

export default Parallax;
