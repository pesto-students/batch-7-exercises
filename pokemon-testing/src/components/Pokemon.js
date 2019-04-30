import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = ({ pokemon }) => (
  <li className="pokemons__item">
    <button
      type="button"
      className="pokemons__sprite"
      style={{
        backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`})`,
      }}
    />
    <p className="pokemons__name">{pokemon.name}</p>
  </li>
);

Pokemon.propTypes = {
  pokemon: PropTypes.string.isRequired,
};

export default Pokemon;
