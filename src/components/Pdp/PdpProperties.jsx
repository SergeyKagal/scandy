import React, { Component } from 'react';
import PropTypes from 'prop-types';

const isPropButtonChecked = 'pdp__prop-button cheked';
const isNotPropButtonChecked = 'pdp__prop-button';
export default class PdpProperties extends Component {
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
                  className={
                    item.isChecked
                      ? isPropButtonChecked
                      : isNotPropButtonChecked
                  }
                  onClick={() =>
                    this.props.propButtonHandler(item.id, attribute.id)
                  }
                >
                  {item.displayValue}
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
