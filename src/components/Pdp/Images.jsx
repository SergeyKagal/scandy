import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Images extends PureComponent {
  state = {
    currentImageUrl: '',
  };
  imageClicklHandler = (id, url) => {
    this.setState({ currentImageUrl: url });
  };

  render() {
    return (
      <div className="pdp__images">
        <div className="pdp__previews">
          {this.props.images.map((image) => (
            <img
              key={image.id}
              src={image.imageUrl}
              alt="product preview"
              onClick={() => {
                this.imageClicklHandler(image.id, image.imageUrl);
              }}
            />
          ))}
        </div>
        <img
          src={this.state.currentImageUrl || this.props.defaultImageUrl}
          alt="product image"
          className="pdp__image"
        />
      </div>
    );
  }
}
Images.propTypes = {
  images: PropTypes.array,
  defaultImageUrl: PropTypes.string,
};
