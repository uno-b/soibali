import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { motion } from 'framer-motion';

import styles from './button.module.scss';

const Button = () => (
  <motion.button
    aria-label="Go to About section"
    animate={{ scale: 1.1, transition: { yoyo: Infinity } }}
    className={styles.button}
    onClick={() => scrollTo('#about')}
  >
    <MdKeyboardArrowDown />
  </motion.button>
);

export default Button;
