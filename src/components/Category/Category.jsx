import React from 'react';
import Header from '../Header/Header';

export default class Category extends React.Component {
  render() {
    return (
      <div>
        <Header activeTitle={this.props.categoryName} />
        <h2>{this.props.categoryName}</h2>
      </div>
    );
  }
}
