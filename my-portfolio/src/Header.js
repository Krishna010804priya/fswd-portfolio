import React from 'react';
import './code.css';

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">krishnapriya.S</a>

      <nav className="navbar">
        <a href="#" className="active">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
