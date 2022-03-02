import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './Categories.css';

export const links = [
  {
    id: 1,
    text: 'Home'
  },
  {
    id: 2,
    text: 'Book'
  },
  {
    id: 1,
    text: 'Magazines'
  },
  {
    id: 1,
    text: 'E-Books'
  },
  {
    id: 1,
    text: 'Magazines'
  }
];

const Categories = ({ categories, filterItems, result }) => {
  const [click, setClick] = useState(false);

  // const handlick = () => setClick(!click);
  // const [items, setItem] = useState(result);

  // const filterItem = categItem => {
  //   const updatedItem = result.filter(item => {
  //     return item.categories === categItem;
  //   });
  //   setItem(updatedItem);
  // };

  return (
    <div className='btn-container'>
      <button className='nav__icons' onClick={() => setClick(!click)}>
        {click ? <CloseIcon /> : <MenuIcon />}
      </button>

      <>
        {links.map(link => {
          const { id, text } = link;
          return (
            <button key={id} className='filter-btn active'>
              {text}
            </button>
          );
        })}
      </>
    </div>
  );
};

export default Categories;
