import React from 'react';
import OrderItem from '../OrderItem/OrderItem';

const Order = props => {
  const orderDetails = props.order.map(orderItem => {
    return (
        <OrderItem
            key={orderItem.name + ' order'}
            name={orderItem.name}
            qty={orderItem.quantity}
            price={orderItem.price}
            remove={() => props.remove(orderItem.name)}
        />
    );
  });

  let total = (<p>Order is empty!<br/>Please add some items!</p>);

  if (props.order.length > 0) {
    total = props.order.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);

    total = 'Order total: ' + total;
  }

  return (
      <div className='Order'>
        <div className="OrderDetails">
          {orderDetails}
        </div>
        <div className="OrderTotal">
          {total}
        </div>
      </div>
  );
};

export default Order;