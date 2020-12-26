import React from 'react';

const MenuItem = props => {
  return (
      <div className='MenuItem' onClick={props.onItemClick}>
        <div className='MenuItemImage'>
          <img src={props.image} alt={props.name} height='100px' />
        </div>
        <div className='MenuItemInfo'>
          <h4 className='MenuItemName'>{props.name}</h4>
          <p className='MenuItemPrice'>{props.price}</p>
        </div>
      </div>
  );
};

export default MenuItem;