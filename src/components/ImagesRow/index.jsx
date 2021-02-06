import React from 'react';
import Fade from 'react-reveal/Fade';

import img1 from '../../images/Building Front.png';
import img2 from '../../images/building front close up.png';
import img3 from '../../images/building Front View.png';
import img4 from '../../images/Building Rear View Close up.png';
import img5 from '../../images/Building Rear View.png';

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
