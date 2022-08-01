import React from 'react';
import Header from '../Header/Header';
import ProductsWrapper from '../ProductsWrapper/ProductsWrapper';
import PropTypes from 'prop-types';
import './Category.css';

export default class Category extends React.Component {
  componentDidUpdate = () => {
    localStorage.setItem('categoryName', this.props.categoryName);
  };
  componentDidMount = () => {
    localStorage.setItem('categoryName', this.props.categoryName);
  };

  render() {
    return (
      <div>
        <Header
          activeTitle={this.props.categoryName}
          switchCurrency={this.props.setCurrentCurrency}
          navList={this.props.navList}
          cart={this.props.cart}
          currentCurrency={this.props.currentCurrency}
          cartUpdate={this.props.cartUpdate}
        />
        <main className="category__wrapper">
          <h2 className="category__title">{this.props.categoryName} </h2>
          <ProductsWrapper
            categoryName={this.props.categoryName}
            currentCurrency={this.props.currentCurrency}
            setPdpId={this.props.setPdpId}
            cart={this.props.cart}
            cartUpdate={this.props.cartUpdate}
          />
        </main>
      </div>
    );
  }
}
Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  currentCurrency: PropTypes.number,
  setPdpId: PropTypes.func.isRequired,
  setCurrentCurrency: PropTypes.func.isRequired,
  navList: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  cartUpdate: PropTypes.func.isRequired,
};
