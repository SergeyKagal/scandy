import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Images from './Images';
import './Pdp.css';
import PdpProperties from './PdpProperties';
import { getData } from '../../utils/getData';
import { queries } from '../../constants/queries';

export default class Pdp extends Component {
  state = {
    pdpId: this.props.pdpId || localStorage.getItem('pdpId'),
    images: [],
    attributes: [],
    product: { attributes: [] },
    prices: [],
  };
  propButtonHandler = (id, attributeId) => {
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
            items: attribute.items.map((item, i) => {
              return { ...item, isChecked: i ? false : true };
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
          switchCurrency={this.props.setCurrentCurrency}
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

            {this.state.prices.length && (
              <div className="pdp__price-wrapper">
                <span>PRICE:</span>
                <div className="pdp__price">
                  <span className="price-symbol">
                    {
                      this.state.prices[this.props.currentCurrency].currency
                        .symbol
                    }
                  </span>
                  <span className="price-amount">
                    {this.state.prices[this.props.currentCurrency].amount}
                  </span>
                </div>
              </div>
            )}

            <button className="add-cart">ADD TO CART</button>
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
  currentCurrency: PropTypes.number.isRequired,
  setCurrentCurrency: PropTypes.func.isRequired,
  navList: PropTypes.array.isRequired,
};
