import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {
  render() {
    let itemsLength = 0;
    let itemsTotal = 0;

    for (let item of this.props.cart) {
      itemsLength += item.quantity;
      itemsTotal += item.price * item.quantity;
    }

    return (
      <nav className="navbar navbar-light bg-light px-4">
        <span className="navbar-brand mb-0 h6 mr-auto">Shoply</span>
        <span>
          <span className="ml-4">Items: {itemsLength}</span>
          <span className="ml-4">Total: ${itemsTotal}</span>
        </span>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Nav);
