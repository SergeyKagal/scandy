import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { itemsInCart } from '../../utils/itemsInCart';
import { PATH } from '../../constants/path';
import { Link } from 'react-router-dom';
import { totalCount } from '../../utils/total-count';
import CartList from '../Cart/CartList';
import store from '../../store';
import { observer } from 'mobx-react';
class Bag extends Component {
  render() {
    return (
      <>
        <div className="bag__background" onClick={this.props.hideShowBag}></div>
        <div className="bag__wrapper">
          <h4 className="bag__title">
            My Bag. <span>{itemsInCart(store.cart)}</span>
          </h4>
          <ul className="bag__list">
            {store.cart.map((cartItem) => (
              <CartList cartClass="bag" key={cartItem.id} cartItem={cartItem} />
            ))}
          </ul>
          <div className="bag__total">
            <div className="bag__total-title">Total</div>
            <div className="bag__total-money">
              <span>
                {totalCount(store.cart, store.currentCurrency).symbol}
              </span>
              <span>
                {totalCount(store.cart, store.currentCurrency).amount.toFixed(
                  2
                )}
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
  hideShowBag: PropTypes.func.isRequired,
};
export default observer(Bag);
