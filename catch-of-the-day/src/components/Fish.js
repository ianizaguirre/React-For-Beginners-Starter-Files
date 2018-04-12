import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Fish extends Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };

  render() {
    const { image, name, price, desc, status } = this.props.iterateDetails;
    const isAvailable = status === 'available';

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />

        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button onClick={this.handleClick} disabled={!isAvailable}>
          {isAvailable ? 'Add To Cart' : 'Sold Out'}
        </button>
      </li>
    );
  }
}
export default Fish;
