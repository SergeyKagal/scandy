import React, { Component } from 'react';
import Header from '../Header/Header';
import './Cart.css';
import CartList from './CartList';
import { totalCount } from '../../utils/total-count';
import { tax } from '../../constants/tax';
import { taxCount } from '../../utils/tax';
import { productQtyInCart } from '../../utils/productQty';
import store from '../../store';
import { observer } from 'mobx-react';
import { removeZeroQty } from '../../utils/remove-zero-qty';

class Cart extends Component {
  componentWillUnmount = () => {
    removeZeroQty();
  };
  render() {
    return (
      <>
        <Header />
        <div className="cart__wrapper">
          <h3 className="cart__title ">CART</h3>
          <ul className="cart__list">
            {!!store.cart.length &&
              store.cart.map((cartItem) => (
                <CartList
                  cartClass="cart"
                  key={cartItem.id}
                  cartItem={cartItem}
                  cart={store.cart}
                />
              ))}
          </ul>
          <div className="cart__payment-wrapper">
            <div className="cart__payment-tax">
              Tax {`${tax}% `}
              <span>
                {totalCount(store.cart, store.currentCurrency).symbol}
              </span>
              <span>
                {taxCount(
                  totalCount(store.cart, store.currentCurrency).amount,
                  tax
                ).toFixed(2)}
              </span>
            </div>

            <div className="cart__payment-qty">
              Quantity: {productQtyInCart(store.cart).value}
            </div>
            <div className="cart__payment-money">
              Total:{' '}
              <span>
                {totalCount(store.cart, store.currentCurrency).symbol}
              </span>
              <span>
                {totalCount(store.cart, store.currentCurrency).amount.toFixed(
                  2
                )}
              </span>
            </div>
            <button>ORDER</button>
          </div>
        </div>
      </>
    );
  }
}

export default observer(Cart);
