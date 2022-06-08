import React, { Component } from 'react';

export default class CartButton extends Component {
  render() {
    return (
      <button className="header__nav-cart">
        <img src="./images/cart-icon.svg" alt="cart-icon" />
      </button>
    );
  }
}
