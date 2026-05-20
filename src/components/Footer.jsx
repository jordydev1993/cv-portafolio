import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pf-footer">
      <div className="pf-footer__top">
        <div>
          <div className="pf-footer__brand-name">Jordy<span>.</span></div>
          <p className="pf-footer__brand-desc">
            Desarrollador Frontend apasionado por crear experiencias web modernas, rápidas y accesibles.
          </p>
        </div>

        <div className="pf-footer__col">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Sobre mí</Link></li>
            <li><Link to="/projects">Proyectos</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>

        <div className="pf-footer__col">
          <h4>Servicios</h4>
          <ul>
            <li><a href="#">Desarrollo Frontend</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Branding</a></li>
            <li><a href="#">Motion Design</a></li>
          </ul>
        </div>

        <div className="pf-footer__col">
          <h4>Newsletter</h4>
          <p style={{ fontSize: 14, color: 'var(--color-gray)', marginBottom: 12 }}>
            Suscribite para recibir novedades y proyectos.
          </p>
          <div className="pf-footer__newsletter-input">
            <input type="email" placeholder="tu@email.com" />
            <button>OK</button>
          </div>
        </div>
      </div>

      <div className="pf-footer__wordmark">JORDY HUANSI</div>

      <div className="pf-footer__bottom">
        <p className="pf-footer__copyright">© 2024 Jordy Huansi. Todos los derechos reservados.</p>
        <p style={{ fontSize: 13, color: 'var(--color-gray)' }}>Hecho con React + Vite</p>
      </div>
    </footer>
  );
};

export default Footer;
