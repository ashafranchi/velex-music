import React from 'react';
import { Link } from 'gatsby';

import { useSiteMetadata } from 'hooks';

import logo from 'assets/images/logo.svg';

const Header = () => {
  const { companyName } = useSiteMetadata();
  return (
    <header className="page-header">
      <nav>
        <Link to="/">
        </Link>
      </nav>
    </header>
  );
};

export default Header;