import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductsWrapper.css';
import { PATH } from '../../constants/path';
import { getData } from '../../utils/getData';
import { queries } from '../../constants/queries';
export default class ProductsWrapper extends Component {
  state = {
    cardsList: [],
  };
  getCategoriesData = async () => {
    const { categories } = await getData(queries.categories);
    // console.log(
    //   categories.filter((item) => item.name === this.props.categoryName)
    // );
    const { products } = categories.filter(
      (item) => item.name === this.props.categoryName
    )[0];
    console.log(products[0].prices[0]);
    this.setState({ cardsList: products });
  };

  componentDidMount = () => this.getCategoriesData();
  // componentDidUpdate = () => this.getCategoriesData();
  render() {
    return (
      <section className="products__wrapper">
        <ul className="products__list">
          {this.state.cardsList.map((card) => {
            return (
              <li className="product__card" key={card.id}>
                {card.id}
                <Link
                  to={PATH.PDP}
                  onClick={() => {
                    this.props.setPdpId(card.id);
                  }}
                >
                  <img src={card.gallery[0]} alt={card.id} />
                  <h3 className="product__title">{card.name}</h3>
                  <div className="product__price">
                    <span className="product__price-currency">
                      {card.prices[this.props.currentCurrency].symbol}
                    </span>
                    <span className="product__price-amont">
                      {card.prices[this.props.currentCurrency].amount.toFixed(
                        2
                      )}
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
};
