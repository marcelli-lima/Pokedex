import React from 'react';
import PropTypes from 'prop-types';
import { pokemonType } from './types';
import Pokemon from './Pokemon';
import Button from './Button';
import './Pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      filter: 'all',
    };
  }

  nextPokemon(numberOfPokemons) {
    this.setState((state) => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
  }

  filterPokemons(filter) {
    this.setState({ filter, pokemonIndex: 0 });
  }

  fetchFilteredPokemons() {
    const { pokemons } = this.props;
    const { filter } = this.state;

    return pokemons.filter((pokemon) => {
      if (filter === 'all') return true;
      return pokemon.type === filter;
    });
  }

  fetchPokemonTypes() {
    const { pokemons } = this.props;

    return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();
    const { pokemonIndex } = this.state;
    const pokemon = filteredPokemons[pokemonIndex];

    return (
      <div className="pokedex">
        <Pokemon pokemon={ pokemon } />
        <div className="pokedex-buttons-panel">
          <Button
            onClick={ () => this.filterPokemons('all') }
            className="filter-button"
          >
            All
          </Button>
          {pokemonTypes.map((type) => (
            <Button
              key={ type }
              onClick={ () => this.filterPokemons(type) }
              className="filter-button"
            >
              { type }
            </Button>
          ))}
        </div>
        <Button
          className="pokedex-button"
          onClick={ () => this.nextPokemon(filteredPokemons.length) }
          disabled={ filteredPokemons.length <= 1 }
        >
          Próximo pokémon
        </Button>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(pokemonType).isRequired,
};

export default Pokedex;