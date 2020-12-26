import React from 'react';
import './OrderItem.css';

const OrderItem = props => {
  return (
      <div className='OrderItem'>
        <p className='OrderItemName'>
          {props.name}
        </p>
        <div className='OrderItemQtyPriceInfo'>
          <p className='OrderItemQty'>
            {'x' + props.qty}
          </p>
          <p className='OrderItemPrice'>
            {props.price + ' KGS'}
          </p>
          <button className='RemoveItemButton' onClick={props.remove}>&times;</button>
        </div>
      </div>
  );
};

export default OrderItem;