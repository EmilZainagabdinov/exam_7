import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

const Menu = props => {
  const menuList = props.menuitems.map(item => {
    return (
        <MenuItem
            key={item.name + ' menu'}
            image={item.image}
            name={item.name}
            price={item.price}
            onItemClick={() => props.onItemClick(item.name)}
        />
    );
  });

  return (
      <div className='Menu'>
        {menuList}
      </div>
  );
};

export default Menu;