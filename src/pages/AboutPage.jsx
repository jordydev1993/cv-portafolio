import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SkillBadge from '../components/SkillBadge';

const experiencia = [
  { id: 1, puesto: 'Desarrollador Frontend Jr.', empresa: 'TechSolutions S.A.', periodo: '2023 - Actualidad', descripcion: 'Desarrollo de interfaces con React y Bootstrap. Integración de APIs REST.' },
  { id: 2, puesto: 'Pasante de IT', empresa: 'StartupLocal', periodo: '2022 - 2023', descripcion: 'Mantenimiento de sitios web y soporte técnico interno.' },
];

const educacion = [
  { id: 1, titulo: 'Tecnicatura en Desarrollo de Software', institucion: 'Universidad Tecnológica Nacional', periodo: '2021 - Actualidad' },
  { id: 2, titulo: 'Bachillerato con Orientación en Informática', institucion: 'Escuela Técnica N°3', periodo: '2015 - 2020' },
];

const habilidadesFront = ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Vite'];
const habilidadesBack = ['Node.js', 'Express', 'Python', 'SQL'];
const habilidadesHerramientas = ['Git', 'GitHub', 'VS Code', 'Figma'];

const AboutPage = ({ tema }) => {
  const [mostrarEducacion, setMostrarEducacion] = useState(true);

  return (
    <div>
      <section className="mb-5">
        <h2 className="mb-3">Sobre mí</h2>
        <p className="fs-5">
          Soy un desarrollador frontend apasionado por crear experiencias web modernas, rápidas y accesibles.
          Me especializo en React y el ecosistema de JavaScript. Siempre estoy aprendiendo nuevas tecnologías
          y buscando proyectos que desafíen mis habilidades.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Experiencia</h2>
        {experiencia.map(exp => (
          <div key={exp.id} className={`card mb-3 ${tema === 'dark' ? 'bg-secondary bg-opacity-25 border-secondary' : ''}`}>
            <div className="card-body">
              <h5 className="card-title mb-1">{exp.puesto}</h5>
              <h6 className="card-subtitle text-muted mb-2">{exp.empresa} · {exp.periodo}</h6>
              <p className="card-text">{exp.descripcion}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-5">
        <div className="d-flex align-items-center gap-3 mb-3">
          <h2 className="mb-0">Educación</h2>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => setMostrarEducacion(prev => !prev)}
          >
            {mostrarEducacion ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>
        {mostrarEducacion && educacion.map(edu => (
          <div key={edu.id} className={`card mb-3 ${tema === 'dark' ? 'bg-secondary bg-opacity-25 border-secondary' : ''}`}>
            <div className="card-body">
              <h5 className="card-title mb-1">{edu.titulo}</h5>
              <h6 className="card-subtitle text-muted">{edu.institucion} · {edu.periodo}</h6>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Habilidades</h2>
        <h6 className="text-muted mb-2">Frontend</h6>
        <div className="mb-3">
          {habilidadesFront.map((hab, i) => (
            <SkillBadge key={i} nombre={hab} variante="primary" />
          ))}
        </div>
        <h6 className="text-muted mb-2">Backend</h6>
        <div className="mb-3">
          {habilidadesBack.map((hab, i) => (
            <SkillBadge key={i} nombre={hab} variante="success" />
          ))}
        </div>
        <h6 className="text-muted mb-2">Herramientas</h6>
        <div>
          {habilidadesHerramientas.map((hab, i) => (
            <SkillBadge key={i} nombre={hab} variante="secondary" />
          ))}
        </div>
      </section>
    </div>
  );
};

AboutPage.propTypes = {
  tema: PropTypes.string,
};

export default AboutPage;
