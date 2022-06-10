import React from 'react';
import Header from '../Header/Header';
import ProductsWrapper from '../ProductsWrapper/ProductsWrapper';
import PropTypes from 'prop-types';
import './Category.css';

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  currentCurrency: PropTypes.number.isRequired,
};
export default class Category extends React.Component {
  state = { currentCurrency: 0 };

  setCurrentCurrency = (currency) => {
    switch (currency) {
      case 'currency-usd':
        this.setState({ currentCurrency: 0 });
        break;
      case 'currency-gbp':
        this.setState({ currentCurrency: 1 });
        break;
      default:
        this.setState({ currentCurrency: 0 });
        break;
    }
  };

  render() {
    return (
      <div>
        <Header
          activeTitle={this.props.categoryName}
          switchCurrency={this.setCurrentCurrency}
        />
        <main className="category__wrapper">
          <h2 className="category__title">{this.props.categoryName} </h2>
          <ProductsWrapper currentCurrency={this.state.currentCurrency} />
        </main>
      </div>
    );
  }
}
