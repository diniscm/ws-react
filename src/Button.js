import React from 'react';
import PropTypes from 'prop-types';

export const IconButton = ({ onClick, src, text }) => (
  <button onClick={onClick}>
    <img src={src} className="icon"/>
  </button>
);

IconButton.propTypes = {
  onClick: PropTypes.func,
  src: PropTypes.string.isRequired,
}
