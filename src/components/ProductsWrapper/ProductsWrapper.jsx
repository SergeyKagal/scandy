import React, { Component } from 'react';
import { currency } from '../../constants/currency';
import './ProductsWrapper.css';
export default class ProductsWrapper extends Component {
  state = {
    currentCurrency: 0,
    cardsList: [
      {
        id: 1,
        productName: 'Apollo Running Short',
        imageUrl: './images/cards/Image1.png',
        price: {
          amont: [50, 80],
        },
      },
      {
        id: 2,
        productName: 'Jupiter Wayfarer',
        imageUrl: './images/cards/Image2.png',
        price: {
          amont: [75, 110],
        },
      },
      {
        id: 3,
        productName: 'Jupiter Wayfarer',
        imageUrl: './images/cards/Image2.png',
        price: {
          amont: [75, 110],
        },
      },
      {
        id: 4,
        productName: 'Jupiter Wayfarer',
        imageUrl: './images/cards/Image2.png',
        price: {
          amont: [75, 110],
        },
      },
      {
        id: 5,
        productName: 'Jupiter Wayfarer',
        imageUrl: './images/cards/Image2.png',
        price: {
          amont: [75, 110],
        },
      },
      {
        id: 6,
        productName: 'Jupiter Wayfarer',
        imageUrl: './images/cards/Image2.png',
        price: {
          amont: [75, 110],
        },
      },
      {
        id: 7,
        productName: 'Jupiter Wayfarer',
        imageUrl: './images/cards/Image2.png',
        price: {
          amont: [75, 110],
        },
      },
    ],
  };
  render() {
    return (
      <section className="products__wrapper">
        <ul className="products__list">
          {this.state.cardsList.map((card) => {
            return (
              <li className="product__card" key={card.id}>
                <img src={card.imageUrl} alt={card.productName} />
                <h3 className="product__title">{card.productName}</h3>
                <div className="product__price">
                  <span className="product__price-currency">
                    {currency.currencySign[this.state.currentCurrency]}
                  </span>
                  <span className="product__price-amont">
                    {card.price.amont[this.state.currentCurrency].toFixed(2)}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
