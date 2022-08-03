import React from 'react';
import Header from '../Header/Header';
import ProductsWrapper from '../ProductsWrapper/ProductsWrapper';
import PropTypes from 'prop-types';
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
          <ProductsWrapper setPdpId={this.props.setPdpId} />
        </main>
      </div>
    );
  }
}
Category.propTypes = {
  setPdpId: PropTypes.func.isRequired,
};

export default observer(Category);
