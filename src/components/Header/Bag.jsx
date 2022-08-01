import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { itemsInCart } from '../../utils/itemsInCart';
import { PATH } from '../../constants/path';
import { Link } from 'react-router-dom';
import { totalCount } from '../../utils/total-count';
import CartList from '../Cart/CartList';
export default class Bag extends Component {
  render() {
    return (
      <>
        <div className="bag__background" onClick={this.props.hideShowBag}></div>
        <div className="bag__wrapper">
          <h4 className="bag__title">
            My Bag. <span>{itemsInCart(this.props.cart)}</span>
          </h4>
          <ul className="bag__list">
            {this.props.cart.map((cartItem) => (
              <CartList
                cartClass="bag"
                key={cartItem.id}
                cartItem={cartItem}
                currentCurrency={this.props.currentCurrency}
                cart={this.props.cart}
                cartUpdate={this.props.cartUpdate}
              />
            ))}
          </ul>
          <div className="bag__total">
            <div className="bag__total-title">Total</div>
            <div className="bag__total-money">
              <span>
                {totalCount(this.props.cart, this.props.currentCurrency).symbol}
              </span>
              <span>
                {totalCount(
                  this.props.cart,
                  this.props.currentCurrency
                ).amount.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="bag__controls">
            <Link to={PATH.CART}>VIEW BAG</Link>
            <button>CHECK OUT</button>
          </div>
        </div>
      </>
    );
  }
}
Bag.propTypes = {
  cart: PropTypes.array.isRequired,
  hideShowBag: PropTypes.func.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  cartUpdate: PropTypes.func.isRequired,
};
