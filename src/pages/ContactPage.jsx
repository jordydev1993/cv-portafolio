import React, { useReducer, useState } from 'react';

const initialState = { nombre: '', email: '', mensaje: '' };
const erroresIniciales = { nombre: '', email: '', mensaje: '' };

const contactFormReducer = (state, action) => {
  switch (action.type) {
    case 'ACTUALIZAR_CAMPO':
      return { ...state, [action.campo]: action.valor };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const ContactPage = () => {
  const [formulario, dispatch] = useReducer(contactFormReducer, initialState);
  const [errores, setErrores] = useState(erroresIniciales);
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const nuevosErrores = {};
    if (!formulario.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio';
    if (!formulario.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nuevosErrores.email = 'Ingresá un email válido';
    if (formulario.mensaje.trim().length < 10) nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleChange = (e) => {
    dispatch({ type: 'ACTUALIZAR_CAMPO', campo: e.target.name, valor: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      setEnviado(true);
      dispatch({ type: 'RESET' });
      setErrores(erroresIniciales);
      setTimeout(() => setEnviado(false), 3000);
    }
  };

  const getInputClass = (campo) => {
    if (errores[campo]) return 'pf-form-control pf-form-control--invalid';
    if (formulario[campo]) return 'pf-form-control pf-form-control--valid';
    return 'pf-form-control';
  };

  return (
    <div className="pf-page">
      <div className="pf-contact">
        <span className="pf-tag">Contacto</span>
        <h2>Hablemos de tu <span style={{ color: 'var(--color-orange)' }}>proyecto</span></h2>
        <p className="pf-contact__sub">
          Completá el formulario y me comunico en menos de 24 horas.
        </p>

        {enviado && (
          <div className="pf-alert-success">
            ¡Mensaje enviado con éxito! Me pondré en contacto pronto.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="pf-form-group">
            <label className="pf-form-label" htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className={getInputClass('nombre')}
              id="nombre"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              onBlur={validar}
              placeholder="Tu nombre completo"
            />
            {errores.nombre && <p className="pf-form-error">{errores.nombre}</p>}
          </div>

          <div className="pf-form-group">
            <label className="pf-form-label" htmlFor="email">Email</label>
            <input
              type="email"
              className={getInputClass('email')}
              id="email"
              name="email"
              value={formulario.email}
              onChange={handleChange}
              onBlur={validar}
              placeholder="tu@email.com"
            />
            {errores.email && <p className="pf-form-error">{errores.email}</p>}
          </div>

          <div className="pf-form-group">
            <label className="pf-form-label" htmlFor="mensaje">Mensaje</label>
            <textarea
              className={getInputClass('mensaje')}
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formulario.mensaje}
              onChange={handleChange}
              onBlur={validar}
              placeholder="Contame sobre tu proyecto..."
            />
            {errores.mensaje && <p className="pf-form-error">{errores.mensaje}</p>}
          </div>

          <div className="pf-form-actions">
            <button type="submit" className="pf-btn pf-btn--orange">
              Enviar mensaje →
            </button>
            <button
              type="button"
              className="pf-btn pf-btn--outline"
              onClick={() => { dispatch({ type: 'RESET' }); setErrores(erroresIniciales); }}
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
