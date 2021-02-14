import React from 'react';
import { Parallax } from 'react-parallax';

import img1 from '../../images/5.webp';
import Button from '../Button';
import styles from './bgParallax.module.scss';

const BGParallax = () => (
  <div className={styles.container}>
    <Parallax bgImage={img1} strength={300}>
      <div className={styles.content} />
    </Parallax>
    <div className={styles.wrapper}>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <ul>
        <li>
          <strong>Unit A</strong>
          <div>Road-front</div>
        </li>
        <li>
          <strong>Unit A</strong>
          <div>Road-front</div>
        </li>
        <li>
          <strong>Unit A</strong>
          <div>Road-front</div>
        </li>
        <li>
          <strong>Unit A</strong>
          <div>Road-front</div>
        </li>
      </ul>
      <ul>
        <li>
          <strong>Unit A</strong>
          <div>Road-front</div>
        </li>
        <li>
          <strong>Unit A</strong>
          <div>Road-front</div>
        </li>
        <li>
          <strong>Unit A</strong>
          <div>Road-front</div>
        </li>
        <li>
          <strong>Unit A</strong>
          <div>Road-front</div>
        </li>
      </ul>
      <ul>
        <li>
          <strong>Unit A</strong>
          <div>Road-front</div>
        </li>
        <li>
          <strong>Unit A</strong>
          <div>Road-front</div>
        </li>
        <li>
          <strong>Unit A</strong>
          <div>Road-front</div>
        </li>
        <li>
          <strong>Unit A</strong>
          <div>Road-front</div>
        </li>
      </ul>
    </div>
    <Button text="REGISTER YOUR INTEREST" />
  </div>
);

export default BGParallax;
