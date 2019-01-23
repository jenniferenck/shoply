import React, { Component } from 'react';
import InventoryItemContainer from '../../containers/InventoryItemContainer';
import inventory from '../../data.json';

class InventoryList extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row my-4 px-2">
          {inventory.items.map(item => (
            <InventoryItemContainer item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default InventoryList;
