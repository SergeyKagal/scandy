import React, { PureComponent } from 'react';
import Header from '../Header/Header';
import './Cart.css';
import CartListItem from './CartListItem';
import { totalCount } from '../../utils/total-count';
import { tax } from '../../constants/tax';
import { taxCount } from '../../utils/tax';
import { productQtyInCart } from '../../utils/productQty';
import store from '../../store';
import { observer } from 'mobx-react';

class Cart extends PureComponent {
  orderButtonHndl = () => {
    store.cartUpdate([]);
  };
  render() {
    const { cart, currentCurrency } = store;
    return (
      <>
        <Header />
        <div className="cart__wrapper">
          <h3 className="cart__title ">CART</h3>

          <ul className="cart__list">
            {!!cart.length &&
              cart.map((cartItem) => (
                <CartListItem
                  cartClass="cart"
                  key={cartItem.id}
                  cartItem={cartItem}
                  cart={cart}
                />
              ))}
          </ul>

          <div className="cart__payment-wrapper">
            <div className="cart__payment-tax">
              Tax {`${tax}% `}
              <span>{totalCount(cart, currentCurrency).symbol}</span>
              <span>
                {taxCount(
                  totalCount(cart, currentCurrency).amount,
                  tax
                ).toFixed(2)}
              </span>
            </div>

            <div className="cart__payment-qty">
              Quantity: {productQtyInCart(cart).value}
            </div>

            <div className="cart__payment-money">
              Total: <span>{totalCount(cart, currentCurrency).symbol}</span>
              <span>{totalCount(cart, currentCurrency).amount.toFixed(2)}</span>
            </div>
            <button onClick={this.orderButtonHndl}>ORDER</button>
          </div>
        </div>
      </>
    );
  }
}

export default observer(Cart);
