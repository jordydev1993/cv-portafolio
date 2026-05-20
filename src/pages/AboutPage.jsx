import React, { useState } from 'react';
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

const AboutPage = () => {
  const [mostrarEducacion, setMostrarEducacion] = useState(true);

  return (
    <div className="pf-page">
      <div className="pf-page__container">
        <span className="pf-tag">Sobre mí</span>
        <h1 className="pf-page__title">Jordy <span>Huansi</span></h1>
        <p className="pf-page__subtitle">Desarrollador Frontend · Estudiante de Sistemas</p>

        <div className="pf-page__section">
          <h3>Quién soy</h3>
          <p style={{ color: 'var(--color-gray-light)', lineHeight: 1.8, fontSize: 16 }}>
            Soy un desarrollador frontend apasionado por crear experiencias web modernas, rápidas y accesibles.
            Me especializo en React y el ecosistema de JavaScript. Siempre estoy aprendiendo nuevas tecnologías
            y buscando proyectos que desafíen mis habilidades.
          </p>
        </div>

        <div className="pf-page__section">
          <h3>Experiencia</h3>
          {experiencia.map(exp => (
            <div key={exp.id} className="pf-exp-card">
              <p className="pf-exp-card__title">{exp.puesto}</p>
              <p className="pf-exp-card__sub">{exp.empresa} · {exp.periodo}</p>
              <p className="pf-exp-card__desc">{exp.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="pf-page__section">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            Educación
            <button
              className="pf-btn pf-btn--outline"
              style={{ padding: '6px 16px', fontSize: 13 }}
              onClick={() => setMostrarEducacion(prev => !prev)}
            >
              {mostrarEducacion ? 'Ocultar' : 'Mostrar'}
            </button>
          </h3>
          {mostrarEducacion && educacion.map(edu => (
            <div key={edu.id} className="pf-exp-card">
              <p className="pf-exp-card__title">{edu.titulo}</p>
              <p className="pf-exp-card__sub">{edu.institucion} · {edu.periodo}</p>
            </div>
          ))}
        </div>

        <div className="pf-page__section">
          <h3>Habilidades</h3>
          <p style={{ fontSize: 13, color: 'var(--color-gray)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Frontend</p>
          <div className="pf-skills-grid" style={{ marginBottom: 20 }}>
            {habilidadesFront.map((hab, i) => <SkillBadge key={i} nombre={hab} />)}
          </div>
          <p style={{ fontSize: 13, color: 'var(--color-gray)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Backend</p>
          <div className="pf-skills-grid" style={{ marginBottom: 20 }}>
            {habilidadesBack.map((hab, i) => <SkillBadge key={i} nombre={hab} />)}
          </div>
          <p style={{ fontSize: 13, color: 'var(--color-gray)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Herramientas</p>
          <div className="pf-skills-grid">
            {habilidadesHerramientas.map((hab, i) => <SkillBadge key={i} nombre={hab} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
