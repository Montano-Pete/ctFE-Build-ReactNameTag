import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ greetingChange, nameChange }) => (
  <form>
    <label>
      Greeting
      <input type="text" onChange={greetingChange} aria-label="greeting" />
    </label>
    <label>
      Name
      <input type="text" onChange={nameChange} aria-label="name" />
    </label>
  </form>
);

Controls.propTypes = {
  greetingChange: PropTypes.string.isRequired,
  nameChange: PropTypes.string.isRequired,
};

export default Controls;
