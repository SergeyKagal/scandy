import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { productQtyInCart } from '../../utils/productQty';

export default class CartButton extends Component {
  render() {
    return (
      <>
        <button className="header__nav-cart">
          <img src="./images/cart-icon.svg" alt="cart-icon" />
        </button>
        {!!this.props.cart.length && (
          <span className="header__nav-productQty">
            {productQtyInCart(this.props.cart)}
          </span>
        )}
      </>
    );
  }
}
CartButton.propTypes = {
  cart: PropTypes.array.isRequired,
};
