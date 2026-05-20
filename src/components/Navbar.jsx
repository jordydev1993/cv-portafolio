import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ tema, toggleTema }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${tema === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light border-bottom'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">Mi Portafolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre mí</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
          </ul>
          <button
            className={`btn btn-sm ms-auto ${tema === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}
            onClick={toggleTema}
          >
            {tema === 'light' ? '🌙 Oscuro' : '☀️ Claro'}
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  tema: PropTypes.string,
  toggleTema: PropTypes.func,
};

export default Navbar;
