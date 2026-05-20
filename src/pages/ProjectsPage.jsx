import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import proyectosData from '../data/proyectos.json';

const ProjectsPage = () => {
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
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <div style={{ width: 40, height: 40, border: '3px solid var(--color-border)', borderTopColor: 'var(--color-orange)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
        <p style={{ color: 'var(--color-gray)' }}>Cargando proyectos...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pf-page">
        <div className="pf-page__container">
          <div style={{ background: 'rgba(231,76,60,0.1)', border: '1px solid rgba(231,76,60,0.3)', color: '#E74C3C', padding: '14px 20px', borderRadius: 8 }}>
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pf-page">
      <div className="pf-page__container" style={{ maxWidth: 1200 }}>
        <span className="pf-tag">Portafolio</span>
        <h1 className="pf-page__title" style={{ marginBottom: 8 }}>Mis <span>Proyectos</span></h1>
        <p className="pf-page__subtitle">Todos los proyectos en los que trabajé</p>

        {proyectos.length === 0 ? (
          <p style={{ color: 'var(--color-gray)' }}>No hay proyectos para mostrar todavía.</p>
        ) : (
          <div className="pf-projects-page__grid">
            {proyectos.map(proyecto => (
              <ProjectCard key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
