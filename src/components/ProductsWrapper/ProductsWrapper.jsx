import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductsWrapper.css';
import { PATH } from '../../constants/path';
import { getData } from '../../utils/getData';
import { queries } from '../../constants/queries';
import store from '../../store';

class ProductsWrapper extends Component {
  state = {
    categoryList: [] || JSON.stringify(localStorage.getItem('categoryList')),
  };

  getCategories = async () => {
    const { categories } = await getData(queries.categories);
    this.setState({ categoryList: categories });
    localStorage.setItem('categoryList', JSON.stringify(categories));
  };
  cartButtonHandler = (e, id) => {
    e.preventDefault();
    return id;
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
                      {card.inStock && (
                        <button
                          className="in-cart-icon"
                          onClick={(e) => this.cartButtonHandler(e, card.id)}
                        ></button>
                      )}
                      <h3 className="product__title">{card.name}</h3>
                      <div className="product__price">
                        <span className="product__price-currency">
                          {store.currentCurrencySymbol}
                        </span>
                        <span className="product__price-amont">
                          {card.prices[store.currentCurrency].amount.toFixed(2)}
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

  setPdpId: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  cartUpdate: PropTypes.func.isRequired,
};
export default observer(ProductsWrapper);
