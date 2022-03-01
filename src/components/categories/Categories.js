import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './Categories.css';

const Categories = ({ categories, filterItems, result }) => {
  const [click, setClick] = useState(false);

  const handlick = () => setClick(!click);
  // const [items, setItem] = useState(result);

  // const filterItem = categItem => {
  //   const updatedItem = result.filter(item => {
  //     return item.categories === categItem;
  //   });
  //   setItem(updatedItem);
  // };

  return (
    <div className='btn-container'>
      <button className='nav__icons' onClick={handlick}>
        {click ? <MenuIcon /> : <CloseIcon />}
      </button>
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
