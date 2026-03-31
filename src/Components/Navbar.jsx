import React, { useState } from 'react';
import './Navbar.css'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">Sania.</div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        
        <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
        <a href="#skills"onClick={() =>setIsOpen(false)}>SKILLS</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>PROJECTS</a>
        
        <a href="#experience" onClick={() =>setIsOpen(false)}>EXPERIENCE</a>
        <a href="#resume" onClick={() =>setIsOpen(false)}>RESUME</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>

      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
}

