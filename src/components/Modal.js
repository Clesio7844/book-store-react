import React from 'react';
import './Modal.css';
import CloseIcon from '@material-ui/icons/Close';

const Modal = ({ show, book, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    book.volumeInfo.imageLinks === undefined
      ? ''
      : `${book.volumeInfo.imageLinks.thumbnail}`;
  return (
    <>
      <div className='overlay'>
        <div className='overlay-inner'>
          <button className='close' onClick={onClose}>
            <CloseIcon />
          </button>
          <div className='inner__box'>
            <img src={thumbnail} alt='' />
            <div className='info'>
              <h1>{book.volumeInfo.title}</h1>
              <h3>{book.volumeInfo.authors}</h3>
              <br />
              <h4>
                {book.volumeInfo.publisher}
                <span>{book.volumeInfo.publishedDate}</span>
              </h4>
              <br />
              <a href={book.volumeInfo.previewLink}>
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className='description'>{book.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
