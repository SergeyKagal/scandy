import React from 'react';
import Header from '../Header/Header';
import ProductCardsWrapper from '../ProductCardsWrapper/ProductCardsWrapper';
import './Category.css';

export default class Category extends React.Component {
  render() {
    return (
      <div>
        <Header activeTitle={this.props.categoryName} />
        <main className="category__wrapper">
          <h2 className="category__title">{this.props.categoryName}</h2>
          <ProductCardsWrapper></ProductCardsWrapper>
        </main>
      </div>
    );
  }
}
