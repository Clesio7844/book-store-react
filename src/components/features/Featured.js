import React, { useState, useEffect } from 'react';
import './Featured.css';
import truncate from '../truncate';

const url = `https://www.googleapis.com/books/v1/volumes?q=all&key=${process.env.REACT_APP_ACCESS_KEY}&maxResults=40`;

const Featured = ({ result }) => {
  const [featureItem, setFeatureItem] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours.items.slice(-2));
      const lastData = tours.items.slice(-2); //returns a new array containing the last 2 elements from the original array

      setFeatureItem(lastData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='featured'>
      <h2>Featured</h2>

      {featureItem.map(item => {
        return (
          <div className='container__featured' key={item.id}>
            <div className='cad__desc-feature'>
              <h1>
                <span>Title:</span> {truncate(item.volumeInfo.title, 40)}
              </h1>
              <h2>
                <span>Authors:</span> {item.volumeInfo.authors}
              </h2>
              <h2>
                <span>Pages:</span> {item.volumeInfo.pageCount}
              </h2>
              <p>description: {truncate(item?.volumeInfo.description, 140)}</p>
            </div>
            <div className='card__imge-feature'>
              <img
                src={
                  item.volumeInfo.imageLinks === undefined
                    ? ''
                    : `${item.volumeInfo.imageLinks.thumbnail}`
                }
                alt={item.title}
                className='feature__image'
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Featured;
