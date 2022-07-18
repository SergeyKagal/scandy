import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { itemsInCart } from '../../utils/itemsInCart';
import { makeButtonClass } from '../../utils/makeButtonClass';
import { attributeChanger } from '../../utils/attribute-change';
import { actionPayload } from '../../constants/action-payload';
import { qtyChanger } from '../../utils/qty-changer';
import Plus from '../ButtonBgr/Plus';
import Minus from '../ButtonBgr/Minus';
import { PATH } from '../../constants/path';
import { Link } from 'react-router-dom';
import { totalCount } from '../../utils/total-count';

export default class Bag extends Component {
  render() {
    return (
      <>
        <div className="bag__background" onClick={this.props.hideShowBag}></div>
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
                          <div
                            className={
                              attribute.name === 'Color'
                                ? 'bag__prop-color-buttons'
                                : 'bag__prop-buttons'
                            }
                          >
                            {attribute.items.map((item) => (
                              <button
                                key={item.id}
                                className={makeButtonClass(
                                  attribute.name,
                                  item.isChecked,
                                  'bag'
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
                <div className="bag__product-qty">
                  <button
                    onClick={() => {
                      qtyChanger(
                        this.props.cart,
                        cartItem.id,
                        actionPayload.increment,
                        this.props.cartUpdate
                      );
                    }}
                  >
                    <Plus />
                  </button>
                  <p>{cartItem.product.qty}</p>
                  <button
                    onClick={() => {
                      qtyChanger(
                        this.props.cart,
                        cartItem.id,
                        actionPayload.decrement,
                        this.props.cartUpdate
                      );
                    }}
                  >
                    <Minus />
                  </button>
                </div>
                <img
                  className="bag__product-image"
                  src={cartItem.product.images[0].imageUrl}
                  alt="product image"
                />
              </li>
            ))}
          </ul>
          <div className="bag__total">
            <div className="bag__total-title">Total</div>
            <div className="bag__total-money">
              <span>
                {totalCount(this.props.cart, this.props.currentCurrency).symbol}
              </span>
              <span>
                {totalCount(this.props.cart, this.props.currentCurrency).amount}
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
  cart: PropTypes.array.isRequired,
  hideShowBag: PropTypes.func.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  cartUpdate: PropTypes.func.isRequired,
};
