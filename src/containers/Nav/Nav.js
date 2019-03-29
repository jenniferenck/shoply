import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
        <NavLink exact to="/">
          <span className="navbar-brand mb-0 h6 mr-auto">Shoply</span>
        </NavLink>
        <NavLink exact to="/cart">
          <span className="navbar-brand">
            <span className="ml-4">
              <i className="fas fa-shopping-cart" />
            </span>
            <span className="ml-4">{itemsLength} Items</span>
            <span className="ml-4">Order Total: ${itemsTotal}</span>
          </span>
        </NavLink>
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
