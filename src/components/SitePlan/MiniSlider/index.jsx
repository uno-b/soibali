import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import Image from './Image';
import i1 from '../../../images/Apartment blue print.png';
import i2 from '../../../images/Building Cut away.png';
import i3 from '../../../images/Site Plan.png';
import styles from './miniSlider.module.scss';

const MiniSlider = () => {
  const sliderArr = [
    [1, <Image src={i1} />],
    [2, <Image src={i2} />],
    [3, <Image src={i3} />],
  ];
  const [x, setX] = useState(0);

  const goLeft = () => {
    if (x === 0) {
      setX(-100 * (sliderArr.length - 1));
    } else {
      setX(x + 100);
    }
  };

  const goRight = () => {
    if (x === -100 * (sliderArr.length - 1)) {
      setX(0);
    } else {
      setX(x - 100);
    }
  };

  return (
    <Fade left duration={1000} distance="30px" delay={1000}>
      <div className={styles.slider}>
        {sliderArr.map((item) => (
          <>
            <div key={item[0]} className={styles.slide} style={{ transform: `translateX(${x}%)` }}>
              {item[1]}
            </div>
          </>
        ))}

        <button type="button" id={styles.goLeft} onClick={goLeft}>
          <MdKeyboardArrowLeft />
        </button>
        <button type="button" id={styles.goRight} onClick={goRight}>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </Fade>
  );
};

export default MiniSlider;
