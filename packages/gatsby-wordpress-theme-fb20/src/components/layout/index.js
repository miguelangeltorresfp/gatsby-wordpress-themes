/**
 * Layout component contains header and footer
 *
 * @package gatsby-wordpress-theme
 */

import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children, data }) => {
  return (
    <>
      <main className="main-container">{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
