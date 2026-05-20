import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../components/ProjectCard';
import proyectosData from '../data/proyectos.json';

const ProjectsPage = ({ tema }) => {
  const [proyectos, setProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarProyectos = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setProyectos(proyectosData);
      } catch (err) {
        setError('No se pudieron cargar los proyectos.');
      } finally {
        setCargando(false);
      }
    };
    cargarProyectos();
  }, []);

  if (cargando) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-2 text-muted">Cargando proyectos...</p>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div>
      <h2 className="mb-4">Mis Proyectos</h2>

      {proyectos.length === 0 ? (
        <p className="text-muted">No hay proyectos para mostrar todavía.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {proyectos.map(proyecto => (
            <div className="col" key={proyecto.id}>
              <ProjectCard proyecto={proyecto} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ProjectsPage.propTypes = {
  tema: PropTypes.string,
};

export default ProjectsPage;
