import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import proyectosData from '../data/proyectos.json';

const servicios = [
  { titulo: 'Branding', descripcion: 'Identidad visual coherente y memorable. Desde el logo hasta la guía de estilo completa que define tu marca.' },
  { titulo: 'Desarrollo Frontend', descripcion: 'SPAs modernas con React, rápidas, accesibles y optimizadas para todos los dispositivos.' },
  { titulo: 'UI/UX Design', descripcion: 'Interfaces centradas en la experiencia del usuario: wireframes, prototipos y diseño en Figma.' },
  { titulo: 'Motion Design', descripcion: 'Animaciones y microinteracciones que potencian la comunicación y mantienen al usuario enganchado.' },
];

const testimonios = [
  {
    texto: '"Trabajar con Jordy fue una experiencia increíble. Su capacidad para entender la visión del proyecto y transformarla en una interfaz limpia y funcional es excepcional."',
    nombre: 'Ana López',
    rol: 'Creative Director, Link & Co',
    estrellas: 5,
    foto: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    texto: '"Entrega resultados limpios, funcionales y a tiempo. El sitio que desarrolló para nuestra startup superó todas las expectativas del equipo y los clientes."',
    nombre: 'Carlos Méndez',
    rol: 'Founder, StartupX',
    estrellas: 5,
    foto: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    texto: '"Profesional, creativo y siempre dispuesto a incorporar feedback. La comunicación durante todo el proyecto fue fluida y transparente."',
    nombre: 'María Fernández',
    rol: 'Product Manager, TechSolutions',
    estrellas: 5,
    foto: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const faqs = [
  { pregunta: '¿Estás disponible para trabajo freelance?', respuesta: 'Sí, actualmente acepto proyectos freelance. Podés contactarme para discutir disponibilidad y plazos.' },
  { pregunta: '¿Qué herramientas y tecnologías usás?', respuesta: 'Principalmente React, JavaScript (ES6+), HTML5, CSS3, Node.js, Git y herramientas de diseño como Figma.' },
  { pregunta: '¿Podemos agendar una llamada para hablar del proyecto?', respuesta: 'Claro, podés enviarme un mensaje por el formulario de contacto y coordinamos una reunión.' },
  { pregunta: '¿Hacés diseño web completo (diseño + desarrollo)?', respuesta: 'Sí, puedo encargarme de todo el proceso: wireframes, diseño en Figma e implementación en código.' },
  { pregunta: '¿Ofrecés servicios de diseño web completos?', respuesta: 'Sí, desde landing pages hasta aplicaciones web completas con autenticación, APIs y base de datos.' },
  { pregunta: '¿Tenés soluciones de diseño responsive?', respuesta: 'Todos mis proyectos están optimizados para mobile-first y se adaptan a cualquier tamaño de pantalla.' },
];

const logos = ['PixelCo', 'NovaTech', 'BrightUI', 'DevLabs', 'Codewave', 'Startup+', 'GridMind', 'ByteBase'];

const avatarUrls = [
  'https://randomuser.me/api/portraits/women/12.jpg',
  'https://randomuser.me/api/portraits/men/45.jpg',
  'https://randomuser.me/api/portraits/women/33.jpg',
];

const HomePage = () => {
  const [servicioAbierto, setServicioAbierto] = useState(0);
  const [faqAbierto, setFaqAbierto] = useState(null);
  const [testimonioActivo, setTestimonioActivo] = useState(0);

  const testimonioActual = testimonios[testimonioActivo];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pf-hero">
        <div className="pf-hero__inner">
          <div>
            <span className="pf-hero__label">Freelance disponible globalmente</span>
            <h1 className="pf-hero__title">
              Soluciones Creativas Que<br />
              <em>Generan Resultados</em> Reales
            </h1>
            <p className="pf-hero__subtitle">
              Desarrollador Frontend · Diseñador UI/UX. Construyo interfaces modernas que convierten visitantes en clientes.
            </p>
            <div className="pf-hero__actions">
              <Link to="/contact" className="pf-btn pf-btn--orange">Contáctame →</Link>
              <Link to="/projects" className="pf-btn pf-btn--outline">Ver proyectos</Link>
            </div>
            <div className="pf-hero__social-proof">
              <div className="pf-hero__avatars">
                {avatarUrls.map((url, i) => (
                  <img key={i} src={url} alt="cliente" />
                ))}
              </div>
              <div className="pf-hero__stars">
                <span>★★★★★</span><br />
                <span style={{ color: 'var(--color-gray)' }}>Disponible para nuevos proyectos</span>
              </div>
            </div>
          </div>

          <div className="pf-hero__image-wrap">
            <div className="pf-hero__image-bg"></div>
            <img
              src="https://placehold.co/440x540/1a1a1a/FF6B00?text=Jordy"
              alt="Jordy Huansi"
              className="pf-hero__image"
            />
          </div>
        </div>
      </section>

      {/* ─── GALLERY STRIP ─── */}
      <div className="pf-gallery">
        <div className="pf-gallery__inner">
          {[
            'https://placehold.co/600x400/1a1a1a/333?text=UI+Design',
            'https://placehold.co/600x400/1a1a1a/FF6B00?text=13',
            'https://placehold.co/600x400/111/888?text=Branding',
          ].map((src, i) => (
            <div key={i} className="pf-gallery__item">
              <img src={src} alt={`gallery-${i}`} />
            </div>
          ))}
        </div>
      </div>

      {/* ─── ABOUT TEASER ─── */}
      <section className="pf-about-teaser pf-section">
        <div className="pf-about-teaser__inner">
          <img
            src="https://placehold.co/400x400/ddd/555?text=Jordy"
            alt="Jordy Huansi"
            className="pf-about-teaser__img"
          />
          <div className="pf-about-teaser__content">
            <span className="pf-tag">Sobre mí</span>
            <h2>Soy <span>Jordy Huansi</span>, tu socio creativo en desarrollo.</h2>
            <p>
              Me apasiona crear experiencias que realmente conecten con las personas.
              No se trata solo de escribir código; se trata de entender el negocio, la marca
              y los usuarios. Cuido cada detalle visual y funcional para que el resultado
              sea cohesivo, súper efectivo y memorable.
            </p>
            <p>
              Especializado en <strong>UI design, web design, desarrollo con React, branding
              y packaging design</strong>. Esto me ayuda a crear diseños que no solo son
              cohesivos, sino también súper efectivos.
            </p>
            <Link to="/about" className="pf-btn pf-btn--outline-dark">Conocerme mejor →</Link>
          </div>
        </div>
      </section>

      {/* ─── SELECTED PROJECTS ─── */}
      <section className="pf-section">
        <div className="pf-container">
          <div className="pf-projects-home__header">
            <div>
              <span className="pf-tag">Trabajo</span>
              <h2>Proyectos Seleccionados</h2>
            </div>
            <Link to="/projects" className="pf-btn pf-btn--outline">Ver todos los proyectos →</Link>
          </div>
          <div className="pf-projects-grid">
            {proyectosData.map(proyecto => (
              <ProjectCard key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ACCORDION ─── */}
      <section className="pf-services pf-section">
        <div className="pf-services__inner">
          <div>
            <span className="pf-tag">Servicios</span>
            <h2>Mi Propuesta<br />Única Para Vos</h2>
            <div>
              {servicios.map((s, i) => (
                <div key={i} className="pf-accordion__item">
                  <button
                    className="pf-accordion__btn"
                    onClick={() => setServicioAbierto(servicioAbierto === i ? null : i)}
                  >
                    {s.titulo}
                    <span className="pf-accordion__icon">{servicioAbierto === i ? '−' : '+'}</span>
                  </button>
                  {servicioAbierto === i && (
                    <p className="pf-accordion__body">{s.descripcion}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <img
            src="https://placehold.co/480x580/1a1a1a/FF6B00?text=Design"
            alt="Services"
            className="pf-services__img"
          />
        </div>
      </section>

      {/* ─── CLIENT LOGOS ─── */}
      <section className="pf-logos pf-section" style={{ paddingTop: 0 }}>
        <div className="pf-container">
          <h3>Trabajé con 60+ marcas en todo el mundo</h3>
        </div>
        <div style={{ overflow: 'hidden', padding: '0 24px' }}>
          <div className="pf-logos__track">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className={`pf-logos__item${i === 3 ? ' pf-logos__item--highlight' : ''}`}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="pf-testimonial pf-section">
        <div className="pf-testimonial__inner">
          <div>
            <span className="pf-tag">Testimonios</span>
            <h2>Lo que dicen<br />mis clientes</h2>
            <p className="pf-testimonial__quote">{testimonioActual.texto}</p>
            <div className="pf-testimonial__stars">{'★'.repeat(testimonioActual.estrellas)}</div>
            <p className="pf-testimonial__author">{testimonioActual.nombre}</p>
            <p className="pf-testimonial__role">{testimonioActual.rol}</p>
            <div className="pf-testimonial__nav">
              <button
                onClick={() => setTestimonioActivo(prev => (prev - 1 + testimonios.length) % testimonios.length)}
              >‹</button>
              <button
                className="active"
                onClick={() => setTestimonioActivo(prev => (prev + 1) % testimonios.length)}
              >›</button>
            </div>
          </div>
          <img
            src={testimonioActual.foto}
            alt={testimonioActual.nombre}
            className="pf-testimonial__img"
          />
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="pf-section">
        <div className="pf-faq__inner">
          <div className="pf-faq__left">
            <span className="pf-tag">FAQ</span>
            <h2>¿Tenés preguntas? Te cubrimos.</h2>
            <p>
              Encontrá respuestas a las preguntas más frecuentes sobre mis servicios,
              procesos y disponibilidad.
            </p>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="pf-faq__item">
                <button
                  className="pf-faq__btn"
                  onClick={() => setFaqAbierto(faqAbierto === i ? null : i)}
                >
                  {faq.pregunta}
                  <span className={`pf-faq__icon${faqAbierto === i ? ' pf-faq__icon--open' : ''}`}>
                    {faqAbierto === i ? '−' : '+'}
                  </span>
                </button>
                {faqAbierto === i && <p className="pf-faq__body">{faq.respuesta}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="pf-cta">
        <h2>Juntos Podemos Crear<br />Algo Verdaderamente Increíble</h2>
        <Link to="/contact" className="pf-btn pf-btn--orange">Trabajemos Juntos →</Link>
      </section>
    </>
  );
};

export default HomePage;
