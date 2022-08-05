import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <>
      <h3>{name}</h3>
      <h3>{type}</h3>
      <h4>{`Peso médio = ${averageWeight.value} ${averageWeight.measurementUnit}`}</h4>
      <img src={image} alt={name} />

      </>
    )
  }
}

export default Pokemon;