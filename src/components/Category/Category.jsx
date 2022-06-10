import React from 'react';
import Header from '../Header/Header';
import ProductsWrapper from '../ProductsWrapper/ProductsWrapper';
import './Category.css';

export default class Category extends React.Component {
  render() {
    return (
      <div>
        <Header activeTitle={this.props.categoryName} />
        <main className="category__wrapper">
          <h2 className="category__title">{this.props.categoryName} </h2>
          <ProductsWrapper />
        </main>
      </div>
    );
  }
}
