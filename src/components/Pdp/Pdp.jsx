import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Images from './Images';
import './Pdp.css';
import PdpProperties from './PdpProperties';
import { getData } from '../../utils/getData';
import { queries } from '../../constants/queries';
import { isProductInCart } from '../../utils/isProductInCart';
import store from '../../store';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
class Pdp extends Component {
  state = {
    pdpId: this.props.pdpId || localStorage.getItem('pdpId'),
    images: [],
    attributes: [],
    product: { attributes: [] },
    prices: [],
    currentProductWithAttributes: {},
  };
  addNewItemToCart = () => {
    const newCartItem = {
      id: `${this.state.pdpId} ${new Date().toISOString()}`,
      product: {
        pdpId: this.state.pdpId,
        brand: this.state.brand,
        name: this.state.name,
        images: this.state.images,
        attributes: this.state.attributes,
        prices: this.state.prices,
        qty: 1,
      },
    };
    store.addNewCartItem(newCartItem);
  };

  addToCartHandler = () => {
    if (isProductInCart(store.cart, this.state.pdpId, this.state.attributes)) {
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

  propButtonHandler = (id, attributeId) => {
    localStorage.setItem('cart', JSON.stringify({}));
    this.setState({
      attributes: this.state.attributes.map((attribute) => {
        if (attributeId !== attribute.id) {
          return attribute;
        } else
          return {
            ...attribute,
            items: attribute.items.map((item) => {
              return {
                ...item,
                isChecked:
                  id === item.id && attributeId === attribute.id ? true : false,
              };
            }),
          };
      }),
    });
    this.setState({
      currentProductWithAttributes: {
        product: this.state.pdpId,
        attributes: this.state.attributes,
        qty: 1,
      },
    });
  };

  componentDidMount = () => {
    localStorage.setItem('pdpId', this.state.pdpId);

    const product = getData(queries.pdp(this.state.pdpId));
    product
      .then((product) => {
        return product.product;
      })
      .then((response) => {
        const attributes = response.attributes.map((attribute) => {
          return {
            ...attribute,
            items: attribute.items.map((item) => {
              return { ...item, isChecked: false };
            }),
          };
        });

        const images = response.gallery.map((image, i) => {
          return { id: `${i}`, imageUrl: image, isCurrent: i ? false : true };
        });

        return { images, attributes, response };
      })
      .then(({ images, attributes, response }) => {
        this.setState({
          attributes: attributes,
          images: images,
          description: response.description,
          brand: response.brand,
          name: response.name,
          defaultImageUrl: response.gallery[0],
          prices: response.prices,
        });
      });
  };
  render() {
    return (
      <>
        <Header
          activeTitle={localStorage.getItem('categoryName')}
          navList={this.props.navList}
        />
        <section className="pdp__wrapper">
          <Images
            images={this.state.images}
            defaultImageUrl={this.state.defaultImageUrl}
          />
          <div className="pdp__main">
            <h3 className="pdp__brand-name">{this.state.brand}</h3>
            <h4 className="pdp__product-name">{this.state.name}</h4>

            <PdpProperties
              attributes={this.state.attributes}
              propButtonHandler={this.propButtonHandler}
            />

            {!!this.state.prices.length && (
              <div className="pdp__price-wrapper">
                <span>PRICE:</span>
                <div className="pdp__price">
                  <span className="price-symbol">
                    {store.currentCurrencySymbol}
                  </span>
                  <span className="price-amount">
                    {this.state.prices[store.currentCurrency].amount.toFixed(2)}
                  </span>
                </div>
              </div>
            )}

            <button className="add-cart" onClick={this.addToCartHandler}>
              ADD TO CART
            </button>
            <p
              className="pdp__about"
              dangerouslySetInnerHTML={{
                __html: this.state.description,
              }}
            ></p>
          </div>
        </section>
      </>
    );
  }
}
Pdp.propTypes = {
  pdpId: PropTypes.string.isRequired,

  navList: PropTypes.array.isRequired,
};
export default observer(Pdp);
