import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../createActions';
import InventoryItem from '../components/InventoryItem/InventoryItem';

class InventoryItemContainer extends Component {
  render() {
    return <InventoryItem {...this.props} />;
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    increment: () => dispatch(increment(ownProps.item)),
    decrement: () => dispatch(decrement(ownProps.item))
  };
}

const connectedComponent = connect(
  null,
  mapDispatchToProps
);

export default connectedComponent(InventoryItemContainer);
