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
          navList={this.props.navList}
        />
        <main className="category__wrapper">
          <h2 className="category__title">{this.props.categoryName} </h2>
          <ProductsWrapper
            categoryName={this.props.categoryName}
            setPdpId={this.props.setPdpId}
          />
        </main>
      </div>
    );
  }
}
Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  setPdpId: PropTypes.func.isRequired,
  navList: PropTypes.array.isRequired,
};
