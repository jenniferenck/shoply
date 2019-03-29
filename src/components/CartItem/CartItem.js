import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const { name, price, image_url, quantity } = this.props.item;
    return (
      <>
        <div>
          <span>
            {name} {price}
          </span>
          <span>
            <img src={image_url} alt={name} />
          </span>
          <span>{quantity}</span>
        </div>
      </>
    );
  }
}

export default CartItem;
