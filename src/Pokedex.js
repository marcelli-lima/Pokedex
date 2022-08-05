import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css'

class Pokedex extends React.Component {
  render() {
    const pokemons = this.props.pokemons;
    return (
      <div className="pokedex" >
      {pokemons.map((poke) => <Pokemon  pokemon={poke} key={poke.id} />)}
      </div>
    )
  }
}

export default Pokedex;