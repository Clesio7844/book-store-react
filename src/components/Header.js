import React, { useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='heading'>
        <img
          src='https://i.pinimg.com/originals/8c/64/69/8c64695ea89ddb51f9b53fa9dfe315e3.png'
          alt='contact'
          className='logo'
        />
        <h1 className='header__title'>The book Store</h1>
      </div>
      <div className='icon'>
        <TwitterIcon />
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </header>
  );
};

export default Header;
