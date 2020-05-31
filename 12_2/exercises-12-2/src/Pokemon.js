import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div>
        <img src={image} className="pokemonImg" alt="pokemon" />
        <p className="pokemonP">Name: {name}</p>
        <p className="pokemonP">Type: {type}</p>
        <p className="pokemonP">
          Weight: {averageWeight.value} {averageWeight.measurementUnit}
        </p>
      </div>
    );
  }
}

export default Pokemon;
