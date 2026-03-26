import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  // Estado para o menu mobile (hambúrguer)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">EDSON<span>.SILVA</span></div>
      
      {/* Menu de Links */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#sobre" onClick={() => setIsOpen(false)}>Sobre</a></li>
        <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Projetos</a></li>
        <li><a href="#contato" onClick={() => setIsOpen(false)}>Contato</a></li>
      </ul>

      {/* Ícone do Menu Mobile */}
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
      </div>
    </nav>
  );
};

export default Navbar;