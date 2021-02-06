import React from 'react';

import styles from './image.module.scss';

const Image = ({ src }) => <img src={src} className={styles.image} alt="Slider Img" />;

export default Image;
