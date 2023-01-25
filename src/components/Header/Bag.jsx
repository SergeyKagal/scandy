import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { itemsInCart } from '../../utils/itemsInCart';
import { PATH } from '../../constants/path';
import { Link } from 'react-router-dom';
import { totalCount } from '../../utils/total-count';
import CartListItem from '../Cart/CartListItem';
import store from '../../store';
import { observer } from 'mobx-react';
class Bag extends PureComponent {
  checkOutButtonHndl = () => {
    store.cartUpdate([]);
  };

  renderTitle(cart) {
    return (
      <h4 className="bag__title">
        My Bag. <span>{itemsInCart(cart)}</span>
      </h4>
    );
  }

  renderBagList(cart) {
    return (
      <ul className="bag__list">
        {cart.map((cartItem) => (
          <CartListItem cartClass="bag" key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
    );
  }

  renderTotal(cart, currentCurrency) {
    return (
      <div className="bag__total">
        <div className="bag__total-title">Total</div>
        <div className="bag__total-money">
          <span>{totalCount(cart, currentCurrency).symbol}</span>
          <span>{totalCount(cart, currentCurrency).amount.toFixed(2)}</span>
        </div>
      </div>
    );
  }

  renderBagControls() {
    return (
      <div className="bag__controls">
        <Link to={PATH.CART}>VIEW BAG</Link>
        <button onClick={this.checkOutButtonHndl}>CHECK OUT</button>
      </div>
    );
  }

  render() {
    const { hideShowBag } = this.props;
    const { cart, currentCurrency } = store;
    return (
      <>
        <div className="bag__background" onClick={hideShowBag}></div>
        <div className="bag__wrapper">
          {this.renderTitle(cart)}
          {this.renderBagList(cart)}
          {this.renderTotal(cart, currentCurrency)}
          {this.renderBagControls()}
        </div>
      </>
    );
  }
}

Bag.propTypes = {
  hideShowBag: PropTypes.func.isRequired,
};

export default observer(Bag);
