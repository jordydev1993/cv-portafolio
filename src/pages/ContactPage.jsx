import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  nombre: '',
  email: '',
  mensaje: '',
};

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

const ContactPage = ({ tema }) => {
  const [formulario, dispatch] = useReducer(contactFormReducer, initialState);
  const [errores, setErrores] = useState(erroresIniciales);
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const nuevosErrores = {};
    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }
    if (!formulario.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      nuevosErrores.email = 'Ingresá un email válido';
    }
    if (formulario.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleChange = (e) => {
    dispatch({ type: 'ACTUALIZAR_CAMPO', campo: e.target.name, valor: e.target.value });
  };

  const handleBlur = () => {
    validar();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      console.log('Formulario enviado:', formulario);
      setEnviado(true);
      dispatch({ type: 'RESET' });
      setErrores(erroresIniciales);
      setTimeout(() => setEnviado(false), 3000);
    }
  };

  const cardClass = tema === 'dark' ? 'bg-secondary bg-opacity-25 border-secondary' : '';

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="mb-4">Contacto</h2>

        {enviado && (
          <div className="alert alert-success alert-dismissible" role="alert">
            ¡Mensaje enviado con éxito! Me pondré en contacto pronto.
          </div>
        )}

        <div className={`card p-4 ${cardClass}`}>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label className="form-label" htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className={`form-control ${errores.nombre ? 'is-invalid' : formulario.nombre ? 'is-valid' : ''}`}
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tu nombre completo"
              />
              {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${errores.email ? 'is-invalid' : formulario.email ? 'is-valid' : ''}`}
                id="email"
                name="email"
                value={formulario.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="tu@email.com"
              />
              {errores.email && <div className="invalid-feedback">{errores.email}</div>}
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="mensaje">Mensaje</label>
              <textarea
                className={`form-control ${errores.mensaje ? 'is-invalid' : formulario.mensaje ? 'is-valid' : ''}`}
                id="mensaje"
                name="mensaje"
                rows="4"
                value={formulario.mensaje}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Escribí tu mensaje aquí..."
              />
              {errores.mensaje && <div className="invalid-feedback">{errores.mensaje}</div>}
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Enviar mensaje
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => {
                  dispatch({ type: 'RESET' });
                  setErrores(erroresIniciales);
                }}
              >
                Limpiar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ContactPage.propTypes = {
  tema: PropTypes.string,
};

export default ContactPage;
