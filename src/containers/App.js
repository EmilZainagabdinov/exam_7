import React, { useState } from 'react';
import cheeseburgerImage from '../assets/de_luxe_cheeseburger.png';
import chefburgerImage from '../assets/de_luxe_chefburger.png';
import boxmasterImage from '../assets/boxmaster.png';
import sandersBucketImage from '../assets/sanders_bucket.png';
import friesImage from '../assets/fries.png';
import pepsiImage from '../assets/pepsi.png';
import './App.css';
import Menu from '../components/Menu/Menu';
import Order from '../components/OrderDetails/Order';

const App = () => {
  const MENUITEMS = [
    {name: 'De Luxe Cheeseburger', price: 169, image: cheeseburgerImage},
    {name: 'De Luxe Chefburger', price: 189, image: chefburgerImage},
    {name: 'Boxmaster', price: 169, image: boxmasterImage},
    {name: 'Sanders Bucket', price: 259, image: sandersBucketImage},
    {name: 'Fries', price: 89, image: friesImage},
    {name: 'Pepsi 0,5l', price: 49, image: pepsiImage},
  ];

  const [order, setOrder] = useState([]);

  const addItem = name => {
    const index = MENUITEMS.findIndex(item => item.name === name);
    const targetItemIndex = order.findIndex(orderItem => orderItem.name === MENUITEMS[index].name);

    if (targetItemIndex === -1) {
      const newOrderItem = {
        name: MENUITEMS[index].name,
        price: MENUITEMS[index].price,
        quantity: 1
      };

      const orderCopy = [...order];
      orderCopy.push(newOrderItem);

      setOrder(orderCopy);

    } else {
      const orderItemCopy = {...order[targetItemIndex]};
      orderItemCopy.quantity++;

      const orderCopy = [...order];
      orderCopy[targetItemIndex] = orderItemCopy;

      setOrder(orderCopy);
    }
  };

  const removeItem = name => {
    const targetItemIndex = order.findIndex(orderItem => orderItem.name === name);
    const orderCopy = [...order];

    orderCopy.splice(targetItemIndex, 1);

    setOrder(orderCopy);
  };

  return (
    <div className='App'>
      <Order order={order} remove={removeItem}/>
      <Menu menuitems={MENUITEMS} onItemClick={addItem} />
    </div>
  );
}

export default App;