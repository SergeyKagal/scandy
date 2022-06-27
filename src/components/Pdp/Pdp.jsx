import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Images from './Images';
import './Pdp.css';
import PdpProperties from './PdpProperties';
import { getData } from '../../utils/getData';

export default class Pdp extends Component {
  state = {
    pdpId: this.props.pdpId || localStorage.getItem('pdpId'),
    images: [],
    attributes: [],
    product: { attributes: [] },
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
    const query = `query {
      product(id:"${this.state.pdpId}"){brand
        name
        id
        gallery
        description
        attributes{id,name,type,items{value,id,displayValue}}
      }
    }`;

    const product = getData(query);
    product
      .then((product) => {
        return product.product;
      })
      .then((r) => {
        const attributes = r.attributes.map((attribute) => {
          return {
            ...attribute,
            items: attribute.items.map((item, i) => {
              return { ...item, isChecked: i ? false : true };
            }),
          };
        });

        this.setState({
          attributes: attributes,
          images: r.gallery,
        });
      });
  };
  render() {
    return (
      <>
        <Header
          activeTitle={localStorage.getItem('categoryName')}
          switchCurrency={this.props.setCurrentCurrency}
        />
        <section className="pdp__wrapper">
          <Images images={this.state.images} />
          <div className="pdp__main">
            <h3 className="pdp__brand-name">{this.state.product.brand}</h3>
            <h4 className="pdp__product-name">{this.state.product.name}</h4>
            {this.state.attributes && (
              <PdpProperties
                attributes={this.state.attributes}
                propButtonHandler={this.propButtonHandler}
              />
            )}
            <button className="add-cart">ADD TO CART</button>
            <p
              className="pdp__about"
              dangerouslySetInnerHTML={{
                __html: this.state.product.description,
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
};
