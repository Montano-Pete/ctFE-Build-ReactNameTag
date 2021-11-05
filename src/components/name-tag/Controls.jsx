import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ greetingChange, nameChange }) => (
  <form>
    <label aria-label="greeting">Greeting</label>
    <input type="text" onChange={greetingChange} />
    <label aria-label="name">Name</label>
    <input type="text" onChange={nameChange} />
  </form>
);

Controls.propTypes = {
  greetingChange: PropTypes.string.isRequired,
  nameChange: PropTypes.string.isRequired,
};

export default Controls;
