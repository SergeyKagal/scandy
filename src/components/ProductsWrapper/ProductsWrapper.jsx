import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import './ProductsWrapper.css';
import { PATH } from '../../constants/path';
import store from '../../store';
import { addToCartHandler } from '../../utils/add-to-cart';

class ProductsWrapper extends Component {
  cartButtonHandler = async (e, id) => {
    e.preventDefault();
    await store.getProductFromBE(id);
    store.addProductFromPLP();
    addToCartHandler();
  };

  componentDidMount = async () => {
    await store.getProductListByCategory(store.currentCategory.name);
  };
  componentDidUpdate = async () => {
    await store.getProductListByCategory(store.currentCategory.name);
  };

  render() {
    return (
      <section className="products__wrapper">
        <ul className="products__list">
          {!!store.productList.length &&
            store.productList.map((card) => {
              return (
                <li className="product__card" key={card.id}>
                  <Link
                    to={PATH.PDP}
                    onClick={() => {
                      store.getProductFromBE(card.id);
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

export default observer(ProductsWrapper);
