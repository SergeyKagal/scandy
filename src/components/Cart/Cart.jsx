import React, { Component } from 'react';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import './Cart.css';
import CartList from './CartList';
import { totalCount } from '../../utils/total-count';
import { tax } from '../../constants/tax';
import { taxCount } from '../../utils/tax';
import { productQtyInCart } from '../../utils/productQty';
import store from '../../store';
import { observer } from 'mobx-react';

class Cart extends Component {
  render() {
    return (
      <>
        <Header
          activeTitle={localStorage.getItem('categoryName')}
          navList={this.props.navList}
          cart={this.props.cart}
          cartUpdate={this.props.cartUpdate}
        />
        <div className="cart__wrapper">
          <h3 className="cart__title ">CART</h3>
          <ul className="cart__list">
            {!!this.props.cart.length &&
              this.props.cart.map((cartItem) => (
                <CartList
                  cartClass="cart"
                  key={cartItem.id}
                  cartItem={cartItem}
                  cart={this.props.cart}
                  cartUpdate={this.props.cartUpdate}
                />
              ))}
          </ul>
          <div className="cart__payment-wrapper">
            <div className="cart__payment-tax">
              Tax {`${tax}% `}
              <span>
                {totalCount(this.props.cart, store.currentCurrency).symbol}
              </span>
              <span>
                {taxCount(
                  totalCount(this.props.cart, store.currentCurrency).amount,
                  tax
                ).toFixed(2)}
              </span>
            </div>

            <div className="cart__payment-qty">
              Quantity: {productQtyInCart(this.props.cart).value}
            </div>
            <div className="cart__payment-money">
              Total:{' '}
              <span>
                {totalCount(this.props.cart, store.currentCurrency).symbol}
              </span>
              <span>
                {totalCount(
                  this.props.cart,
                  store.currentCurrency
                ).amount.toFixed(2)}
              </span>
            </div>
            <button>ORDER</button>
          </div>
        </div>
      </>
    );
  }
}

Cart.propTypes = {
  navList: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  cartUpdate: PropTypes.func.isRequired,
};
export default observer(Cart);
