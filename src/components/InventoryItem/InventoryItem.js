import React, { Component } from 'react';

class InventoryItem extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.item.name}</h5>
          <img
            style={{ maxWidth: '200px' }}
            src={this.props.item.image_url}
            alt={this.props.item.name}
          />
          <p className="card-text">${this.props.item.price}</p>
          <button onClick={this.props.increment} className="btn btn-success">
            Add to Cart
          </button>
          <button onClick={this.props.decrement} className="btn btn-danger">
            Remove from Cart
          </button>
        </div>
      </div>
    );
  }
}

export default InventoryItem;
