// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return (
      <div className = "product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark ? 'Yes' : 'No'}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
};

const colors = ["white", "eggshell-white", "salmon"];

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(colors).isRequired,
  weight: function(props, propName, componentName) {
    if (!props[propName]) {
      return new Error("Needs number")
    }
    if (isNaN(props[propName])) {
      return new Error("Not a number")
    }
    if (props[propName] < 80 || props[propName] > 300) {
      return new Error("Outside of weight range")
    }
  }
};


export default Product;
