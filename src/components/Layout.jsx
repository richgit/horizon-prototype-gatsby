/* eslint no-unused-expressions: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => (
  <React.Fragment>
    <Headroom>
      <Header />
    </Headroom>
    <div className="container mt-5">{children}</div>
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

export default Layout;
