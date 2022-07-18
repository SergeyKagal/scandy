import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { itemsInCart } from '../../utils/itemsInCart';
import { makeButtonClass } from '../../utils/makeButtonClass';
import { attributeChanger } from '../../utils/attribute-change';

export default class Bag extends Component {
  render() {
    return (
      <>
        <div className="bag__background" onClick={this.props.hideShowBag}>
          Bag
        </div>
        <div className="bag__wrapper">
          <h4 className="bag__title">
            My Bag. <span>{itemsInCart(this.props.cart)}</span>
          </h4>
          <ul className="bag__list">
            {this.props.cart.map((cartItem) => (
              <li className="bag__list-item" key={cartItem.id}>
                <div className="bag__product">
                  <h5>{cartItem.product.brand}</h5>
                  <h5>{cartItem.product.name}</h5>
                  <div className="bag__product-price">
                    {
                      cartItem.product.prices[this.props.currentCurrency]
                        .currency.symbol
                    }
                    {cartItem.product.prices[this.props.currentCurrency].amount}
                  </div>
                  <div className="bag__product-attributes">
                    {!!cartItem.product.attributes.length &&
                      cartItem.product.attributes.map((attribute) => (
                        <div key={attribute.id} className="bag__prop-wrapper">
                          <span>{attribute.name}:</span>
                          <div className="bag__prop-buttons">
                            {attribute.items.map((item) => (
                              <button
                                key={item.id}
                                className={makeButtonClass(
                                  attribute.name,
                                  item.isChecked
                                )}
                                style={
                                  attribute.name === 'Color'
                                    ? { backgroundColor: item.value }
                                    : null
                                }
                                onClick={() =>
                                  attributeChanger(
                                    this.props.cart,
                                    cartItem.id,
                                    attribute.id,
                                    item.id,
                                    this.props.cartUpdate
                                  )
                                }
                              >
                                {item.value}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="bag__product-qty"></div>
                <img className="bag__product-image" src="" alt="" />
              </li>
            ))}
          </ul>
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
