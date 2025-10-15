import React, { useState } from 'react';
import './Navbar.css'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">Sania Sultana</div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About Me</a>
        <a href="#skills"onClick={() =>setIsOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#achievements" onClick={() =>setIsOpen(false)}>Achievements</a>
       {/* <a href="#experience" onClick={() =>setIsOpen(false)}>Experience</a>*/}
        <a href="#resume" onClick={() =>setIsOpen(false)}>Resume</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact Me</a>

      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
}

