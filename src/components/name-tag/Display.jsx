import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ greeting, name }) => (
  <>
    <p>{greeting}</p>
    <p>{name}</p>
  </>
);

Display.propTypes = {
  greeting: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Display;
