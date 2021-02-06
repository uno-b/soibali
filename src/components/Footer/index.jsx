/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    © Copyright {new Date().getFullYear()} All Rights Reserved
  </footer>
);

export default Footer;
