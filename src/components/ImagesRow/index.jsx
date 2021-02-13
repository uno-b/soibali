import React from 'react';
import Fade from 'react-reveal/Fade';

import img1 from '../../images/5.webp';
import img2 from '../../images/6.webp';
import img3 from '../../images/7.webp';
import img4 from '../../images/8.webp';
import img5 from '../../images/9.webp';

import styles from './imagesRow.module.scss';

const ImagesRow = () => (
  <div className={styles.imagesRow}>
    <Fade left duration={1000} distance="30px">
      <img src={img1} alt="Building front" />
    </Fade>
    <Fade left duration={1000} distance="30px" delay={100}>
      <img src={img2} alt="building front close up" />
    </Fade>
    <Fade left duration={1000} distance="30px" delay={200}>
      <img src={img3} alt="building Front View" />
    </Fade>
    <Fade left duration={1000} distance="30px" delay={300}>
      <img src={img4} alt="Building Rear View Close up" />
    </Fade>
    <Fade left duration={1000} distance="60px" delay={400}>
      <img src={img5} alt="Building Rear View" />
    </Fade>
  </div>
);

export default ImagesRow;
