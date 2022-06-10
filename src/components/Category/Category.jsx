import React from 'react';
import Header from '../Header/Header';
import ProductsWrapper from '../ProductsWrapper/ProductsWrapper';
import './Category.css';

export default class Category extends React.Component {
  state = { currentCurrency: 0 };

  setCurrentCurrency = (currency) => {
    switch (currency) {
      case 'currency-usd':
        this.setState({ currentCurrency: 0 });
        console.log('switch usd');
        break;
      case 'currency-gbp':
        this.setState({ currentCurrency: 1 });
        console.log('switch gbp');
        break;
      default:
        this.setState({ currentCurrency: 0 });
        console.log('switch default');
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
