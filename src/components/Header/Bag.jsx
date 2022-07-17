import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { itemsInCart } from '../../utils/itemsInCart';
import { makeButtonClass } from '../../utils/makeButtonClass';

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
            {this.props.cart.map((item) => (
              <li className="bag__list-item" key={item.id}>
                <div className="bag__product">
                  <h5>{item.product.brand}</h5>
                  <h5>{item.product.name}</h5>
                  <div className="bag__product-price">
                    {
                      item.product.prices[this.props.currentCurrency].currency
                        .symbol
                    }
                    {item.product.prices[this.props.currentCurrency].amount}
                  </div>
                  <div className="bag__product-attributes">
                    {!!item.product.attributes.length &&
                      item.product.attributes.map((attribute) => (
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
                                  this.buttonClickHandler(attribute, item)
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
};
