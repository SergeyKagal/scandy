import React, { Component } from 'react';
import Header from '../Header/Header';
import Images from './Images';
import './Pdp.css';
import PdpProperties from './PdpProperties';
import { isProductInCart } from '../../utils/isProductInCart';
import store from '../../store';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
class Pdp extends Component {
  addNewItemToCart = () => {
    const newCartItem = {
      id: `${store.productID} ${new Date().toISOString()}`,
      product: {
        ...store.currentProduct,
        images: store.currentProductImages,
        attributes: store.currentProductAttributes,
        qty: 1,
      },
    };
    store.addNewCartItem(newCartItem);
  };

  addToCartHandler = () => {
    if (isProductInCart(store.cart, store.productID, this.state.attributes)) {
      store.cartUpdate([
        ...toJS(store.cart).map((cartItem) => {
          if (this.state.pdpId === cartItem.product.pdpId) {
            return {
              id: cartItem.id,
              product: { ...cartItem.product, qty: cartItem.product.qty + 1 },
            };
          } else {
            return cartItem;
          }
        }),
      ]);
    } else {
      let counter = 0;
      this.state.attributes.forEach((attribute) => {
        attribute.items.map((item) => {
          if (item.isChecked) {
            counter++;
          }
        });
      });
      if (counter === this.state.attributes.length) {
        this.addNewItemToCart();
      }
    }
  };

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

            <button className="add-cart" onClick={this.addToCartHandler}>
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
