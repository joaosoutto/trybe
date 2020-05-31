import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokemonDiv">
        {pokemons.map(pokemon => (
          <div className="pokemonEDiv">
            <Pokemon key={pokemon.name} pokemon={pokemon} />
          </div>
        ))}
      </div>
    );
  }
}

export default Pokedex;
