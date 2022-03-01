import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Categories from './components/categories/Categories';
// import items from './components/data';
import truncate from './components/truncate';

import Featured from './components/features/Featured';
import Filter from './components/Filter';

const url = `https://www.googleapis.com/books/v1/volumes?q=all&key=${process.env.REACT_APP_ACCESS_KEY}&maxResults=8`;

// const allCategories = ['Home', ...new Set(items.map(item => item.category))]; // only to get uniq categorie from api. if have some repeat value i can use Set and use all to be in array

function App() {
  const [menuItems, setMenuItems] = useState(url);
  const [categories, setCategories] = useState([]);

  const [books, setBooks] = useState([]);
  const [result, setResult] = useState([]);
  const [filetered, setFiltered] = useState([]);
  const [active, setActive] = useState('');
  const [lastItem, setLastItem] = useState([]);

  const filterItems = categories => {
    if (categories === 'Home') {
      setMenuItems(result);
      return;
    }
    const newItems = result.filter(item => item.categories === categories);
    setMenuItems(newItems);
  };

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours.items);
      setResult(tours.items);
      setFiltered(tours.items);

      setBooks(tours.items[Math.floor(Math.random() * tours.items.length - 1)]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []); // run once when the row load, and dont run again
  console.log(books?.volumeInfo?.description);
  return (
    <div className='wrapper'>
      <div className='header'>
        <Header />
      </div>

      <section className='category__section'>
        {/* <Categories filterItems={filterItems} categories={categories} /> */}
        <Categories
          filterItems={filterItems}
          categories={categories}
          result={result}
        />

        <div className='title'>
          <p>{truncate(books?.volumeInfo?.description, 340)}</p>
        </div>
      </section>
      {/* <Filter
            result={result}
            setFiltered={setFiltered}
            active={active}
            setActive={setActive}
          /> */}

      <div className='menu__section'>
        <Menu items={menuItems} result={result} filetered={filetered} />
      </div>
      <div className='featured__section'>
        <Featured result={result} lastItem={lastItem} />
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
