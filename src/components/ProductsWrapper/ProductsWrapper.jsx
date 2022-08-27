import React, { PureComponent } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import './ProductsWrapper.css';
import { PATH } from '../../constants/path';
import store from '../../store';
import { addToCartHandler } from '../../utils/add-to-cart';

class ProductsWrapper extends PureComponent {
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

  renderAddToCartButton(card) {
    return card.inStock ? (
      <button
        className="in-cart-icon"
        onClick={(e) => this.cartButtonHandler(e, card.id)}
      ></button>
    ) : null;
  }

  renderCardImage(card) {
    return <img src={card.gallery[0]} alt={card.id} />;
  }

  renderCardInfo(card) {
    return (
      <>
        <h3 className="product__title">{card.name}</h3>
        <div className="product__price">
          <span className="product__price-currency">
            {store.currentCurrencySymbol}
          </span>
          <span className="product__price-amont">
            {card.prices[store.currentCurrency].amount.toFixed(2)}
          </span>
        </div>
      </>
    );
  }

  render() {
    const { productList } = store;
    return (
      <section className="products__wrapper">
        <ul className="products__list">
          {!!productList.length &&
            productList.map((card) => {
              return (
                <li className="product__card" key={card.id}>
                  <Link
                    to={PATH.PDP}
                    onClick={() => {
                      store.getProductFromBE(card.id);
                    }}
                    className={card.inStock ? undefined : 'disabled-link'}
                  >
                    {this.renderCardImage(card)}
                    {this.renderAddToCartButton(card)}
                    {this.renderCardInfo(card)}
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
