import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css'

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="pokemon">
      <h3>{name}</h3>
      <h3>{type}</h3>
      <h4>{`Peso médio = ${averageWeight.value} ${averageWeight.measurementUnit}`}</h4>
      <img src={image} alt={name} />
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
  })
};

export default Pokemon;