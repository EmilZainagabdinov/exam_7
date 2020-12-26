import React from 'react';
import OrderItem from '../OrderItem/OrderItem';
import './Order.css';

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

  let total = 'You haven\'t ordered anything yet';
  const totalOrderClasses = ['OrderTotal'];

  if (props.order.length > 0) {
    total = props.order.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);

    total = `Order total: ${total} KGS` ;
    totalOrderClasses.push('OrderTotal_hasItems');
  }

  return (
      <div className='Order'>
        <h3 className='BlockTitle'>Order details</h3>
        <div className='OrderDetails'>
          {orderDetails}
        </div>
        <h4 className={totalOrderClasses.join(' ')}>
          {total}
        </h4>
      </div>
  );
};

export default Order;