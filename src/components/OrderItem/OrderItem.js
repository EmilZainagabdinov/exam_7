import React from 'react';

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
          <button onClick={props.remove}>&times;</button>
        </div>
      </div>
  );
};

export default OrderItem;