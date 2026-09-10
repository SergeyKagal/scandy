import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { productQtyInCart } from '../../utils/productQty';
import store from '../../store';
import { observer } from 'mobx-react';

class CartButton extends PureComponent {
  render() {
    const { hideShowBag } = this.props;
    const { displayValue } = productQtyInCart(store.cart);
    return (
      <>
        <button className="header__nav-cart" onClick={hideShowBag}>
          <img src="./images/cart-icon.svg" alt="cart-icon" />
        </button>
        {!!store.cart.length && (
          <span className="header__nav-productQty">{displayValue}</span>
        )}
      </>
    );
  }
}
CartButton.propTypes = {
  isShowBag: PropTypes.bool.isRequired,
  hideShowBag: PropTypes.func.isRequired,
};
export default observer(CartButton);
