import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { attributeChanger } from '../../utils/attribute-change';
import { makeButtonClass } from '../../utils/makeButtonClass';
import { qtyChanger } from '../../utils/qty-changer';
import { actionPayload } from '../../constants/action-payload';
import { plusBtn } from '../ButtonBgr/Plus';
import { minusBtn } from '../ButtonBgr/Minus';
import { imageChanger } from '../../utils/image-changer';

export default class CartList extends Component {
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

  render() {
    return (
      <li className={`${this.props.cartClass}__list-item`}>
        <div className={`${this.props.cartClass}__product`}>
          <h5
            className={
              this.props.cartClass === 'cart'
                ? 'cart__product-brand'
                : undefined
            }
          >
            {this.props.cartItem.product.brand}
          </h5>
          <h5
            className={
              this.props.cartClass === 'cart' ? 'cart__product-name' : undefined
            }
          >
            {this.props.cartItem.product.name}
          </h5>
          <div className={`${this.props.cartClass}__product-price`}>
            {
              this.props.cartItem.product.prices[this.props.currentCurrency]
                .currency.symbol
            }
            {this.props.cartItem.product.prices[
              this.props.currentCurrency
            ].amount.toFixed(2)}
          </div>
          <div className={`${this.props.cartClass}__product-attributes`}>
            {!!this.props.cartItem.product.attributes.length &&
              this.props.cartItem.product.attributes.map((attribute) => (
                <div
                  key={attribute.id}
                  className={`${this.props.cartClass}__prop-wrapper`}
                >
                  <span>{attribute.name}:</span>
                  <div
                    className={
                      attribute.name === 'Color'
                        ? `${this.props.cartClass}__prop-color-buttons`
                        : `${this.props.cartClass}__prop-buttons`
                    }
                  >
                    {attribute.items.map((item) => (
                      <button
                        key={item.id}
                        className={makeButtonClass(
                          attribute.name,
                          item.isChecked,
                          this.props.cartClass
                        )}
                        style={
                          attribute.name === 'Color'
                            ? { backgroundColor: item.value }
                            : null
                        }
                        // onClick={() =>
                        //   attributeChanger(
                        //     this.props.cart,
                        //     this.props.cartItem.id,
                        //     attribute.id,
                        //     item.id,
                        //     this.props.cartUpdate
                        //   )
                        // }
                      >
                        {item.value}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className={`${this.props.cartClass}__product-qty`}>
          <button
            onClick={() => {
              qtyChanger(
                this.props.cart,
                this.props.cartItem.id,
                actionPayload.increment,
                this.props.cartUpdate
              );
            }}
          >
            {plusBtn(this.props.cartClass)}
          </button>
          <p>{this.props.cartItem.product.qty}</p>
          <button
            onClick={() => {
              qtyChanger(
                this.props.cart,
                this.props.cartItem.id,
                actionPayload.decrement,
                this.props.cartUpdate
              );
            }}
          >
            {minusBtn(this.props.cartClass)}
          </button>
        </div>
        <img
          className={`${this.props.cartClass}__product-image`}
          src={
            this.props.cartItem.product.images[this.state.imageNumber].imageUrl
          }
          alt="product image"
        />
        {this.props.cartClass === 'cart' && (
          <div className="image-changer">
            <button
              className="image-changer-left"
              onClick={() => this.imageButtonHandler(actionPayload.decrement)}
            ></button>
            <button
              className="image-changer-right"
              onClick={() => this.imageButtonHandler(actionPayload.increment)}
            ></button>
          </div>
        )}
      </li>
    );
  }
}

CartList.propTypes = {
  cartItem: PropTypes.object.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  cart: PropTypes.array.isRequired,
  cartUpdate: PropTypes.func.isRequired,
  cartClass: PropTypes.string.isRequired,
};
