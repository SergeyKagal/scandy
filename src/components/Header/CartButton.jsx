import React, { Component } from 'react';

export default class CartButton extends Component {
  state = {
    productQty: 3,
  };
  render() {
    return (
      <>
        <button className="header__nav-cart">
          <img src="./images/cart-icon.svg" alt="cart-icon" />
        </button>
        <span className="header__nav-productQty">{this.state.productQty}</span>
      </>
    );
  }
}
