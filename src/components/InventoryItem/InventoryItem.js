import React, { Component } from 'react';

class InventoryItem extends Component {
  render() {
    return (
      <div className="d-flex col-12 col-md-6 col-lg-4">
        <div className="card" style={{ marginBottom: '30px', width: '100%' }}>
          <div className="card-body">
            <h5 className="card-title text-capitalize">
              {this.props.item.name}
            </h5>
            <p className="h3 mb-3">${this.props.item.price}</p>
            <img
              style={{
                maxWidth: '200px',
                maxHeight: '200px'
              }}
              src={this.props.item.image_url}
              alt={this.props.item.name}
            />
          </div>
          <div className="card-footer d-flex justify-content-between">
            <button
              onClick={this.props.decrement}
              className="btn btn-outline-danger"
            >
              Remove from Cart
            </button>
            <button onClick={this.props.increment} className="btn btn-success">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default InventoryItem;
