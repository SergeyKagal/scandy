import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PdpProperties extends Component {
  state = {
    attributes: [],
  };

  componentDidMount = () => {
    this.setState({
      attributes: this.props.attributes.map((attribute) => {
        return {
          ...attribute,
          items: attribute.items.map((item, i) => {
            return { ...item, isChecked: i ? false : true };
          }),
        };
      }),
    });
  };
  render() {
    console.log(this.state.attributes);
    return (
      <div className="pdp__props">
        {this.state.attributes.map((attribute) => (
          <div key={attribute.id} className="pdp__prop-wrapper">
            <span>{attribute.name}:</span>
            <div className="pdp__prop-buttons">
              {attribute.items.map((item) => (
                <button key={item.id}>{item.displayValue}</button>
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
};
