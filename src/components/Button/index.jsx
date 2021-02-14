import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({ text }) => (
  <button type="submit" className={styles.submitBtn}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: 'Click',
};

export default Button;
