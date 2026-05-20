import React from 'react';
import PropTypes from 'prop-types';

const SkillBadge = ({ nombre }) => {
  return <span className="pf-badge">{nombre}</span>;
};

SkillBadge.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default SkillBadge;
