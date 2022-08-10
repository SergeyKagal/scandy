import React from 'react';
import Header from '../Header/Header';
import ProductsWrapper from '../ProductsWrapper/ProductsWrapper';
import './Category.css';
import { observer } from 'mobx-react';
import store from '../../store';

class Category extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="category__wrapper">
          <h2 className="category__title">{store.currentCategory.name} </h2>
          <ProductsWrapper />
        </main>
      </div>
    );
  }
}

export default observer(Category);
