import React from 'react';
import PropTypes from 'prop-types';
import SkillBadge from './SkillBadge';

const ProjectCard = ({ proyecto }) => {
  return (
    <div className="card h-100 shadow-sm">
      {proyecto.imagen && (
        <img src={proyecto.imagen} className="card-img-top" alt={proyecto.nombre} style={{ height: '180px', objectFit: 'cover' }} />
      )}
      <div className="card-body">
        <h5 className="card-title">{proyecto.nombre}</h5>
        <p className="card-text text-muted">{proyecto.descripcion}</p>
        <div>
          {proyecto.tecnologias.map((tech, index) => (
            <SkillBadge key={index} nombre={tech} variante="secondary" />
          ))}
        </div>
      </div>
      {proyecto.link && (
        <div className="card-footer bg-transparent">
          <a href={proyecto.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
            Ver repositorio
          </a>
        </div>
      )}
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
