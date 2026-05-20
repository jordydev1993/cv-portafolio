import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ tema, toggleTema }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="pf-navbar">
      <div className="pf-navbar__inner">
        <Link className="pf-navbar__logo" to="/">Jordy<span>.</span></Link>

        <ul className="pf-navbar__links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre mí</Link></li>
          <li><Link to="/projects">Proyectos</Link></li>
        </ul>

        <div className="pf-navbar__actions">
          <Link to="/contact" className="pf-btn pf-btn--orange">Contacto</Link>
          <button
            className="pf-navbar__hamburger"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Abrir menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="pf-navbar__mobile" onClick={() => setMenuOpen(false)}>
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre mí</Link>
          <Link to="/projects">Proyectos</Link>
          <Link to="/contact">Contacto</Link>
        </nav>
      )}
    </header>
  );
};

Navbar.propTypes = {
  tema: PropTypes.string,
  toggleTema: PropTypes.func,
};

export default Navbar;
