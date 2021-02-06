import React from 'react';
import Fade from 'react-reveal/Fade';

import Map from './Map';
import Form from './Form';
import styles from './contact.module.scss';

const Contact = () => (
  <div className={styles.container} id="contact">
    <Fade left duration={1000} distance="60px">
      <h1>Contact Me</h1>
    </Fade>
    <Fade right duration={1000} distance="60px">
      <div className={styles.underline} />
    </Fade>
    <div className={styles.wrapper}>
      <Map />
      <Form />
    </div>
  </div>
);

export default Contact;
