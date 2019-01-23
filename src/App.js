import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import InventoryList from './components/InventoryList/InventoryList';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    let itemsLength = 0;
    let itemsTotal = 0;

    for (let item of this.props.cart) {
      itemsLength += item.quantity;
      itemsTotal += item.price * item.quantity;
    }

    return (
      <div className="App">
        <Nav itemsLength={itemsLength} itemsTotal={itemsTotal} />
        <InventoryList />
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

export default connectedComponent(App);
