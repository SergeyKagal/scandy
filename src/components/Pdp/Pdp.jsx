import React, { PureComponent } from 'react';
import Images from './Images';
import './Pdp.css';
import PdpProperties from './PdpProperties';
import store from '../../store';
import { observer } from 'mobx-react';
import { addToCartHandler } from '../../utils/add-to-cart';
import { isAllAttributesChecked } from '../../utils/attrchecker';

class Pdp extends PureComponent {
  renderImages(gallery) {
    return gallery ? (
      <Images
        images={store.currentProductImages}
        defaultImageUrl={store.currentProduct.gallery[0]}
      />
    ) : null;
  }

  renderPrice(prices) {
    return prices ? (
      <div className="pdp__price-wrapper">
        <span>PRICE:</span>
        <div className="pdp__price">
          <span className="price-symbol">{store.currentCurrencySymbol}</span>
          <span className="price-amount">
            {prices[store.currentCurrency].amount.toFixed(2)}
          </span>
        </div>
      </div>
    ) : null;
  }

  renderDescription(description) {
    return description ? (
      <p
        className="pdp__about"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></p>
    ) : null;
  }

  render() {
    const { gallery, brand, name, prices, description } = store.currentProduct;
    return (
      <>
        <section className="pdp__wrapper">
          {this.renderImages(gallery)}
          <div className="pdp__main">
            <h3 className="pdp__brand-name">{brand}</h3>
            <h4 className="pdp__product-name">{name}</h4>
            {store.currentProductAttributes && <PdpProperties />}

            {this.renderPrice(prices)}

            {!!store.currentProduct && (
              <button
                className="add-cart"
                onClick={addToCartHandler}
                disabled={
                  !store.currentProduct.inStock || !isAllAttributesChecked()
                }
              >
                ADD TO CART
              </button>
            )}
            {this.renderDescription(description)}
          </div>
        </section>
      </>
    );
  }
}

export default observer(Pdp);
