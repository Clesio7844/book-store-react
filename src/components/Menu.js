import React, { useState } from 'react';
import truncate from './truncate';
import './Menu.css';
import Modal from './Modal';

const Menu = ({ filetered }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  return (
    <div className='section-center'>
      {filetered.map(book => {
        return (
          <>
            <div
              className='container'
              key={book.id}
              onClick={() => {
                setShow(true);
                setItem(book);
              }}
            >
              <div className='product-img'>
                <img
                  src={
                    book.volumeInfo.imageLinks === undefined
                      ? ''
                      : `${book.volumeInfo.imageLinks.thumbnail}`
                  }
                  alt={book.title}
                />
              </div>
              <div className='product-desc'>
                <h1>
                  <span>Title:</span> {truncate(book.volumeInfo.title, 40)}
                </h1>
                <h2>
                  <span>Authors:</span> {book.volumeInfo.authors}
                </h2>
                <h2>
                  <span>Pages:</span> {book.volumeInfo.pageCount}
                </h2>
                <p>{truncate(book?.volumeInfo.description, 140)}</p>
              </div>
            </div>
            <Modal show={show} book={bookItem} onClose={() => setShow(false)} />
          </>
        );
      })}
    </div>
  );
};

export default Menu;
