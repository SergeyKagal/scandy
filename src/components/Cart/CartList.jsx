import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { imageChanger } from '../../utils/image-changer';
import { observer } from 'mobx-react';
import { removeZeroQty } from '../../utils/remove-zero-qty';
import {
  renderAttributes,
  renderImage,
  renderImageChanger,
  renderPrice,
  renderQty,
  renderTitle,
} from './CartListRenders';

class CartList extends PureComponent {
  state = {
    imageNumber: 0,
    maxImageNumber: this.props.cartItem.product.images.length - 1,
  };

  imageButtonHandler = (action) => {
    this.setState({
      imageNumber: imageChanger(
        this.state.imageNumber,
        this.state.maxImageNumber,
        action
      ),
    });
  };

  componentDidUpdate = () => {
    if (!this.props.cartItem.product.qty) {
      removeZeroQty();
    }
  };

  render() {
    const { cartClass, cartItem } = this.props;

    return (
      <li className={`${cartClass}__list-item`}>
        <div className={`${cartClass}__product`}>
          {renderTitle(cartClass, cartItem)}
          {renderPrice(cartClass, cartItem)}
          {renderAttributes(cartClass, cartItem)}
        </div>
        {renderQty(cartClass, cartItem)}
        {renderImage(cartClass, cartItem, this.state.imageNumber)}
        {cartClass === 'cart' &&
          cartItem.product.images.length > 1 &&
          renderImageChanger()}
      </li>
    );
  }
}

CartList.propTypes = {
  cartItem: PropTypes.object.isRequired,
  cartClass: PropTypes.string.isRequired,
};
export default observer(CartList);
