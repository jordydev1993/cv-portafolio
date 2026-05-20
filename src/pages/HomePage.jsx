import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SkillBadge from '../components/SkillBadge';

const skillsPrincipales = ['React', 'JavaScript', 'HTML', 'CSS', 'Git', 'Bootstrap'];

const HomePage = ({ tema }) => {
  return (
    <div>
      <section className={`text-center py-5 rounded mb-4 ${tema === 'dark' ? 'bg-secondary bg-opacity-25' : 'bg-primary bg-opacity-10'}`}>
        <img
          src="https://via.placeholder.com/120"
          alt="Foto de perfil"
          className="rounded-circle mb-3 border border-3"
          width="120"
          height="120"
        />
        <h1 className="display-5 fw-bold">Jordy Huansi</h1>
        <p className="lead">Desarrollador Frontend · Estudiante de Sistemas</p>
        <p className="text-muted">Apasionado por construir interfaces modernas y accesibles con React.</p>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Habilidades principales</h2>
        <div>
          {skillsPrincipales.map((skill, index) => (
            <SkillBadge key={index} nombre={skill} />
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">¿Querés trabajar juntos?</h2>
        <p>No dudes en contactarme para proyectos, colaboraciones o simplemente para saludar.</p>
        <Link to="/contact" className="btn btn-primary me-2">
          Contactame
        </Link>
        <Link to="/projects" className="btn btn-outline-secondary">
          Ver mis proyectos
        </Link>
      </section>
    </div>
  );
};

HomePage.propTypes = {
  tema: PropTypes.string,
};

export default HomePage;
