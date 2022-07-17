import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductsWrapper.css';
import { PATH } from '../../constants/path';
import { getData } from '../../utils/getData';
import { queries } from '../../constants/queries';
import { isProductInCart } from '../../utils/isProductInCart';
export default class ProductsWrapper extends Component {
  state = {
    categoryList: [] || JSON.stringify(localStorage.getItem('categoryList')),
  };

  getCategories = async () => {
    const { categories } = await getData(queries.categories);
    this.setState({ categoryList: categories });
    localStorage.setItem('categoryList', JSON.stringify(categories));
  };

  componentDidMount = () => {
    if (!this.state.categoryList.length) {
      this.getCategories();
    }
  };

  render() {
    return (
      <section className="products__wrapper">
        <ul className="products__list">
          {!!this.state.categoryList.length &&
            this.state.categoryList
              .filter(
                (category) => category.name === this.props.categoryName
              )[0]
              .products.map((card) => {
                return (
                  <li className="product__card" key={card.id}>
                    <Link
                      to={PATH.PDP}
                      onClick={() => {
                        this.props.setPdpId(card.id);
                      }}
                      className={card.inStock ? undefined : 'disabled-link'}
                    >
                      <img src={card.gallery[0]} alt={card.id} />{' '}
                      {isProductInCart(this.props.cart, card.id, null) && (
                        <img
                          className="in-cart-icon"
                          src="./images/in-cart-icon.svg"
                          alt="cart icon"
                        />
                      )}
                      <h3 className="product__title">{card.name}</h3>
                      <div className="product__price">
                        <span className="product__price-currency">
                          {
                            card.prices[this.props.currentCurrency].currency
                              .symbol
                          }
                        </span>
                        <span className="product__price-amont">
                          {card.prices[
                            this.props.currentCurrency
                          ].amount.toFixed(2)}
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
        </ul>
      </section>
    );
  }
}
ProductsWrapper.propTypes = {
  categoryName: PropTypes.string.isRequired,
  currentCurrency: PropTypes.number.isRequired,
  setPdpId: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
};
