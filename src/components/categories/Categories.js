import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './Categories.css';

const Categories = ({}) => {
  const [click, setClick] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const options = ['Home', 'Book', 'Magazines', 'E-Books', 'Account'];
  const [selected, setSelected] = useState(-1);

  const handlick = () => setClick(!click);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setSelected(index);
  };

  return (
    <div className='btn-container'>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
        className='nav__icons'
      >
        <MenuIcon />
      </Button>

      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className='menu__hamburger'
        PaperProps={{
          style: {
            width: '30ch'
          }
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            onClick={event => onMenuItemClick(event, index)}
            selected={index === selected}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

      <button
        type='button'
        className='filter-btn active'
        // onClick={() => filterItems('Home')}
        onClick={handlick}
      >
        Home
      </button>
      <button
        type='button'
        className='filter-btn '
        // onClick={() => filterItems('E-Books')}
        onClick={handlick}
      >
        Book
      </button>

      <button type='button' className='filter-btn' onClick={handlick}>
        Magazines
      </button>
      <button type='button' className='filter-btn' onClick={handlick}>
        E-Books
      </button>
      <button type='button' className='filter-btn' onClick={handlick}>
        Account
      </button>
    </div>
  );
};

export default Categories;
