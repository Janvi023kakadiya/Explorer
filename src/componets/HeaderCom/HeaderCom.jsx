import React from 'react';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Logo />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
