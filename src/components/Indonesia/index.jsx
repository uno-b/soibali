import React from 'react';
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';

import bg from '../../images/Bali.webp';
import img1 from '../../images/world 1.png';
import img2 from '../../images/world 2.png';
import img3 from '../../images/world 3.png';
import img4 from '../../images/world 4.png';
import img5 from '../../images/world 5.png';
import img6 from '../../images/world 6.png';
import Button from '../Button';
import styles from './indonesia.module.scss';

const Indonesia = () => (
  <div className={styles.container}>
    <Parallax bgImage={bg} strength={300}>
      <div className={styles.content} />
    </Parallax>
    <div className={styles.wrapper}>
      <Fade left duration={1000} distance="60px">
        <h1>Bali Indonesia</h1>
      </Fade>
      <Fade right duration={1000} distance="60px">
        <div className={styles.underline} />
      </Fade>
      <Fade left duration={1000} distance="60px">
        <p>
          Bali is the most popular island destination in the Indonesian archipelago. Renowned
          globally for its stunning beaches, bloodred sunsets, premier surfing and rich culture,
          Bali welcomed close to 6.3 million tourists in 2019 alone, making it the standout choice
          for property investment in Asia.
        </p>
        <div className={styles.list}>
          <img src={img1} alt="1" />
          <img src={img2} alt="2" />
          <img src={img3} alt="3" />
          <img src={img4} alt="4" />
          <img src={img5} alt="5" />
          <img src={img6} alt="6" />
        </div>
      </Fade>
      <Fade bottom duration={1000} distance="60px">
        <Button text="REGISTER YOUR INTEREST" />
      </Fade>
    </div>
  </div>
);

export default Indonesia;
