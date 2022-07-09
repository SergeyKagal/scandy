import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartButton extends Component {
  render() {
    return (
      <>
        <button className="header__nav-cart">
          <img src="./images/cart-icon.svg" alt="cart-icon" />
        </button>
        <span className="header__nav-productQty">{this.props.cart.length}</span>
      </>
    );
  }
}
CartButton.propTypes = {
  cart: PropTypes.array.isRequired,
};
