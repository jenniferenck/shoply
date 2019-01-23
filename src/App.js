import React, { Component } from 'react';
import './App.css';
import InventoryList from './components/InventoryList/InventoryList';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <InventoryList />
      </div>
    );
  }
}

export default App;
