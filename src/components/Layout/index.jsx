import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';
import Footer from '../Footer';
import './reset.scss';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
