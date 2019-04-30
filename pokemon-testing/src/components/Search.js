import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onChange }) => (
  <input
    type="text"
    onChange={onChange}
    placeholder="Enter pokemon name..."
  />
);

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Search;
