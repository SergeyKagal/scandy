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
    productAbout:
      "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
    images: [],
    attributes: [],
    product: {},
  };

  componentDidMount = async () => {
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

    const product = await getData(query);
    this.setState({
      images: product.product.gallery,
      attributes: product.product.attributes,
      product: product.product,
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
            <PdpProperties attributes={this.state.attributes} />
            <button className="add-cart">ADD TO CART</button>
            <p className="pdp__about">{this.state.product.description}</p>
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
