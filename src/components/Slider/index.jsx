import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import PropTypes from 'prop-types';

import Image from './Image';
import styles from './slider.module.scss';
import i1 from '../../images/1st floor unit.png';
import i2 from '../../images/2nd floor unit.png';
import Text from './Text';
import Button from './Button';

const Slider = ({ cover }) => {
  const sliderArr = [
    [1, <Image src={i1} />],
    [2, <Image src={i2} />],
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
    <div className={styles.slider} id="home">
      {sliderArr.map((item) => (
        <>
          <div key={item[0]} className={styles.slide} style={{ transform: `translateX(${x}%)` }}>
            {item[1]}
          </div>
          {cover && (
            <>
              <Text />
              <Button />
            </>
          )}
        </>
      ))}

      <button type="button" id={styles.goLeft} onClick={goLeft}>
        <MdKeyboardArrowLeft />
      </button>
      <button type="button" id={styles.goRight} onClick={goRight}>
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

Slider.propTypes = {
  cover: PropTypes.bool,
};

Slider.defaultProps = {
  cover: true,
};

export default Slider;
