import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const pokemons = this.props.pokemons;
    return (
      <>
      {pokemons.map((poke) => <Pokemon  pokemon={poke} key={poke.id} />)}
      </>
    )
  }
}

export default Pokedex;