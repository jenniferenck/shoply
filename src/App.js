import React, { Component } from 'react';
import './App.css';
import InventoryList from './components/InventoryList/InventoryList';
import { Route, Switch } from 'react-router-dom';
import Nav from './containers/Nav/Nav';
import CartContainer from './containers/CartContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <InventoryList />} />
          <Route exact path="/cart" render={() => <CartContainer />} />
        </Switch>
      </div>
    );
  }
}

export default App;
