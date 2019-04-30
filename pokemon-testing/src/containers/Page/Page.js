import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pokemon from '../../components/Pokemon';
import Search from '../../components/Search';

class Page extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    this.props.pageActions.fetchPokemons();
  }

  handleSearch(e) {
    this.props.pageActions.filterPokemons(e.target.value);
  }

  render() {
    const { displayedPokemons, isFetched } = this.props.page;

    const pokemons = displayedPokemons.map((pokemon, index) => {
      // eslint-disable-next-line react/no-array-index-key
      return <Pokemon pokemon={pokemon} key={index} />;
    });

    return (
      <div className="pokemons__wrapper">
        <Search onChange={this.handleSearch} />
        <ul className="pokemons">
          {
            isFetched ?
              <p>Loading...</p> :
              pokemons
          }
        </ul>
      </div>
    );
  }
}

Page.propTypes = {
  page: PropTypes.number.isRequired,
  pageActions: PropTypes.shape().isRequired,
};

export default Page;
