import React from 'react';
import PropTypes from 'prop-types';
import SkillBadge from './SkillBadge';

const ProjectCard = ({ proyecto }) => {
  return (
    <div className="pf-card">
      <div className="pf-card__img-wrap">
        <img
          src={proyecto.imagen || 'https://placehold.co/600x340/1a1a1a/888?text=' + encodeURIComponent(proyecto.nombre)}
          className="pf-card__img"
          alt={proyecto.nombre}
        />
        {proyecto.link && (
          <div className="pf-card__overlay">
            <a
              href={proyecto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-card__overlay-btn"
              onClick={e => e.stopPropagation()}
            >
              Ver Proyecto →
            </a>
          </div>
        )}
      </div>
      <div className="pf-card__body">
        <h5 className="pf-card__title">{proyecto.nombre}</h5>
        <p className="pf-card__desc">{proyecto.descripcion}</p>
        <div className="pf-card__tags">
          {proyecto.tecnologias.map((tech, index) => (
            <SkillBadge key={index} nombre={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  proyecto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    imagen: PropTypes.string,
    tecnologias: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
