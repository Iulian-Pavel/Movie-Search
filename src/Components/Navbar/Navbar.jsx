import React, { useState } from "react";
import "./navbar.css";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={isOpen ? 'resp-nav' : ''}>
        <div className="logo">Movie Search</div>
        <ul className={isOpen ? 'mb-ul' : ''}>
          <li>Home</li>
          <li>Top Rated</li>
        </ul>
        <div className="hamburger" onClick={ () => setIsOpen(!isOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
