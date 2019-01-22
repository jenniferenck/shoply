import React, { Component } from 'react';
import InventoryItemContainer from '../../containers/InventoryItemContainer';
import inventory from '../../data.json';

class InventoryList extends Component {
  render() {
    return (
      <div>
        {inventory.items.map(item => (
          <InventoryItemContainer item={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default InventoryList;
