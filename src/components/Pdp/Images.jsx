import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Images extends Component {
  render() {
    return (
      <div className="pdp__images">
        <div className="pdp__previews">
          {this.props.images.map((imageUrl, key) => (
            <img key={key} src={imageUrl} alt="product preview" />
          ))}
        </div>
        <img
          src={this.props.images[0]}
          alt="product image"
          className="pdp__image"
        />
      </div>
    );
  }
}
Images.propTypes = {
  images: PropTypes.array,
};
