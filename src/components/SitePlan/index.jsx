import React from 'react';
import Fade from 'react-reveal/Fade';

import MiniSlider from './MiniSlider';
import styles from './sitePlan.module.scss';

const SitePlan = () => (
  <div className={styles.container} id="plan">
    <div className={styles.info}>
      <Fade left duration={1000} distance="30px">
        <h2>Site Plan</h2>
      </Fade>
      <Fade left duration={1000} distance="30px" delay={100}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, nisi omnis praesentium
          fugiat sunt nemo cum fugit, libero amet aspernatur reprehenderit placeat.
        </p>
      </Fade>
      <Fade left duration={1000} distance="30px" delay={200}>
        <button type="button">Download</button>
      </Fade>
    </div>
    <MiniSlider />
  </div>
);

export default SitePlan;
