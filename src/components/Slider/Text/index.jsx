import React from 'react';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

import styles from './text.module.scss';

const titleContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default () => (
  <motion.div
    className={styles.titleContainer}
    variants={titleContainerVariants}
    initial="hidden"
    animate="visible"
  >
    <Fade bottom duration={1000} delay={600} distance="30px">
      <h1>Soibali Website</h1>
    </Fade>
    <Fade bottom duration={1000} delay={1000} distance="30px">
      <p>The description goes here</p>
    </Fade>
  </motion.div>
);
