import React from 'react';
import Fade from 'react-reveal/Fade';

import styles from './form.module.scss';

const Form = () => (
  <form action="https://formspree.io/f/xleovpjj" method="POST">
    <div className={styles.formGroup}>
      <Fade right duration={1000} distance="30px">
        <input type="text" name="name" placeholder="Name" />
      </Fade>
      <Fade right duration={1000} distance="30px" delay={100}>
        <input type="email" name="email" placeholder="Email" />
      </Fade>
      <Fade right duration={1000} distance="30px" delay={200}>
        <textarea name="message" rows="5" placeholder="Message" />
      </Fade>
    </div>
    <Fade left duration={1000} distance="30px" delay={300}>
      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </Fade>
  </form>
);

export default Form;
