import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pdp extends Component {
  state = {
    pdpId: this.props.pdpId || localStorage.getItem('pdpId'),
  };

  componentDidMount = () => {
    localStorage.setItem('pdpId', this.state.pdpId);
  };
  render() {
    return (
      <>
        <h2>PDP</h2>
        <h3>{this.state.pdpId}</h3>
      </>
    );
  }
}
Pdp.propTypes = {
  pdpId: PropTypes.string.isRequired,
};
