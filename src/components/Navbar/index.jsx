import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from '../../images/10.webp';
import MenuItems from './MenuItems';
import styles from './navbar.module.scss';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={styles.navbarItems}>
      <h1 className={styles.logo}>
        <img src={Logo} alt="Logo" className={styles.logoImg} />
      </h1>
      <button type="button" className={styles.menuIcon} onClick={handleClick}>
        {clicked ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={clicked ? styles.active : ''}>
        {MenuItems.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <button type="button" className={styles.navLinks} onClick={() => scrollTo(item.url)}>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
