import React, { PureComponent } from 'react';
import Header from '../Header/Header';
import Images from './Images';
import './Pdp.css';
import PdpProperties from './PdpProperties';
import store from '../../store';
import { observer } from 'mobx-react';
import { addToCartHandler } from '../../utils/add-to-cart';

class Pdp extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <section className="pdp__wrapper">
          {store.currentProduct.gallery && (
            <Images
              images={store.currentProductImages}
              defaultImageUrl={store.currentProduct.gallery[0]}
            />
          )}
          <div className="pdp__main">
            <h3 className="pdp__brand-name">{store.currentProduct.brand}</h3>
            <h4 className="pdp__product-name">{store.currentProduct.name}</h4>

            {store.currentProductAttributes && <PdpProperties />}

            {store.currentProduct.prices && (
              <div className="pdp__price-wrapper">
                <span>PRICE:</span>
                <div className="pdp__price">
                  <span className="price-symbol">
                    {store.currentCurrencySymbol}
                  </span>
                  <span className="price-amount">
                    {store.currentProduct.prices[
                      store.currentCurrency
                    ].amount.toFixed(2)}
                  </span>
                </div>
              </div>
            )}

            <button
              className="add-cart"
              onClick={addToCartHandler}
              disabled={!store.currentProduct.inStock}
            >
              ADD TO CART
            </button>
            {store.currentProduct.description && (
              <p
                className="pdp__about"
                dangerouslySetInnerHTML={{
                  __html: store.currentProduct.description,
                }}
              ></p>
            )}
          </div>
        </section>
      </>
    );
  }
}

export default observer(Pdp);
