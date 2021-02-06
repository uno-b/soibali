import React from 'react';
import Fade from 'react-reveal/Fade';

import styles from './about.module.scss';

const About = () => (
  <div className={styles.container} id="about">
    <Fade left duration={1000} distance="60px">
      <h1>About</h1>
    </Fade>
    <Fade right duration={1000} distance="60px">
      <div className={styles.underline} />
    </Fade>
    <Fade bottom duration={1000} distance="30px" delay={500}>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error amet quo sed neque facilis.
        Non debitis deserunt, voluptatum laboriosam culpa molestias quasi provident ratione soluta
        doloremque quam. Nulla, obcaecati magnam.
      </p>
    </Fade>
  </div>
);

export default About;
