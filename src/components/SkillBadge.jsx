import React from 'react';
import PropTypes from 'prop-types';

const SkillBadge = ({ nombre, variante }) => {
  return (
    <span className={`badge bg-${variante || 'primary'} me-1 mb-1`}>
      {nombre}
    </span>
  );
};

SkillBadge.propTypes = {
  nombre: PropTypes.string.isRequired,
  variante: PropTypes.string,
};

export default SkillBadge;
