import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light px-4">
        <span className="navbar-brand mb-0 h6 mr-auto">Shoply</span>
        <span>
          <span className="ml-4">Items: {this.props.itemsLength}</span>
          <span className="ml-4">Total: ${this.props.itemsTotal}</span>
        </span>
      </nav>
    );
  }
}

export default connect()(Nav);
