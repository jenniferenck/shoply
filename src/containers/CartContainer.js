import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../components/CartItem/CartItem';

class CartContainer extends Component {
  render() {
    console.log(this.props.cart);
    return (
      <div>
        <h2>Here's what's in your cart:</h2>
        <div className="container-fluid">
          <div className="row my-4 px-2 justify-content-center">
            <ul
              className="list-group"
              style={{ listStyle: 'none', width: '80%' }}
            >
              {this.props.cart.map(item => (
                <li className="list-group-item">
                  <CartItem item={item} key={item.id} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(CartContainer);
