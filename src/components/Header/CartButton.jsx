import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { productQtyInCart } from '../../utils/productQty';
import store from '../../store';
import { observer } from 'mobx-react';

class CartButton extends PureComponent {
  render() {
    return (
      <>
        <button className="header__nav-cart" onClick={this.props.hideShowBag}>
          <img src="./images/cart-icon.svg" alt="cart-icon" />
        </button>
        {!!store.cart.length && (
          <span className="header__nav-productQty">
            {productQtyInCart(store.cart).displayValue}
          </span>
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
