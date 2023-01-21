import React from 'react';
import ProductsWrapper from '../ProductsWrapper/ProductsWrapper';
import './Category.css';
import { observer } from 'mobx-react';
import store from '../../store';

class Category extends React.PureComponent {
  render() {
    return (
      <div>
        <main className="category__wrapper">
          <h2 className="category__title">{store.currentCategory.name} </h2>
          <ProductsWrapper />
        </main>
      </div>
    );
  }
}

export default observer(Category);
