import React, { Component } from 'react';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import './Cart.css';

export default class Cart extends Component {
  render() {
    return (
      <>
        <Header
          activeTitle={localStorage.getItem('categoryName')}
          switchCurrency={this.props.setCurrentCurrency}
          navList={this.props.navList}
          cart={this.props.cart}
          currentCurrency={this.props.currentCurrency}
          cartUpdate={this.props.cartUpdate}
        />
        <div className="cart__wrapper">
          <h3 className="cart__title ">CART</h3>
          <ul className="cart__list">
            {!!this.props.cart.length &&
              this.props.cart.map((cartItem) => (
                <li key={cartItem.id} className="cart__list-item">
                  <div className="cart__list-item-product">
                    <div className="cart__list-item-title">
                      <h5 className="cart__list-item-brand">
                        {cartItem.product.brand}
                      </h5>
                      <h5 className="cart__list-item-name">
                        {cartItem.product.name}
                      </h5>
                    </div>
                  </div>
                  <div className="cart__list-item-images">
                    <div className="cart__list-item-qty-buttons">
                      <button>+</button>
                      <span>1</span>
                      <button>-</button>
                    </div>
                    <div className="cart__list-item-image-wrapper">
                      <img src="" alt="" />
                      <div className="image-switch-buttons">
                        <button>left</button>
                        <button>right</button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </>
    );
  }
}

Cart.propTypes = {
  currentCurrency: PropTypes.number,
  setCurrentCurrency: PropTypes.func.isRequired,
  navList: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  cartUpdate: PropTypes.func.isRequired,
};
