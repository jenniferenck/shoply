import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../createActions';
import InventoryItem from '../components/InventoryItem/InventoryItem';

class InventoryItemContainer extends Component {
  render() {
    return <InventoryItem {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    increment: () => dispatch(increment(ownProps)),
    decrement: () => dispatch(decrement(ownProps))
  };
}

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectedComponent(InventoryItemContainer);
