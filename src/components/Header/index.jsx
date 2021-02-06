import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './header.module.scss';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.title}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
