import React from 'react';
import './MenuItem.css';

const MenuItem = props => {
  return (
      <div className='MenuItem' onClick={props.onItemClick}>
        <div className='MenuItemImage'>
          <img src={props.image} alt={props.name} height='80px' />
        </div>
        <div className='MenuItemInfo'>
          <h4 className='MenuItemName'>{props.name}</h4>
          <p className='MenuItemPrice'>Price: {props.price} KGS</p>
        </div>
      </div>
  );
};

export default MenuItem;