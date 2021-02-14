import React from 'react';
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';

import img1 from '../../images/5.webp';
import Button from '../Button';
import styles from './bgParallax.module.scss';

const BGParallax = () => (
  <div className={styles.container}>
    <Parallax bgImage={img1} strength={300}>
      <div className={styles.content} />
    </Parallax>
    <div className={styles.wrapper}>
      <Fade left duration={1000} distance="60px">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      </Fade>
      <Fade left duration={1000} distance="60px" delay={200}>
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
      </Fade>
      <Fade left duration={1000} distance="60px" delay={400}>
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
      </Fade>
      <Fade left duration={1000} distance="60px" delay={600}>
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
      </Fade>
    </div>
    <Fade bottom duration={1000} distance="60px">
      <Button text="REGISTER YOUR INTEREST" />
    </Fade>
  </div>
);

export default BGParallax;
