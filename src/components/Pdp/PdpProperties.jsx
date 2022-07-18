import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeButtonClass } from '../../utils/makeButtonClass';

export default class PdpProperties extends Component {
  buttonClickHandler = (attribute, item) => {
    this.props.propButtonHandler(item.id, attribute.id);
  };
  render() {
    return (
      <div className="pdp__props">
        {this.props.attributes.map((attribute) => (
          <div key={attribute.id} className="pdp__prop-wrapper">
            <span>{attribute.name}:</span>
            <div className="pdp__prop-buttons">
              {attribute.items.map((item) => (
                <button
                  key={item.id}
                  className={makeButtonClass(
                    attribute.name,
                    item.isChecked,
                    'pdp'
                  )}
                  style={
                    attribute.name === 'Color'
                      ? { backgroundColor: item.value }
                      : null
                  }
                  onClick={() => this.buttonClickHandler(attribute, item)}
                >
                  {item.value}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

PdpProperties.propTypes = {
  attributes: PropTypes.array,
  propButtonHandler: PropTypes.func,
};
