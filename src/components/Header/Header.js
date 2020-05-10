import React from 'react';
import './header.scss';
import HeaderSelect from '../Select/Select';

const Header = props => {
  return (
    <header>
      <div>
        <h1 className='header-title'>Covid-19 Online Map </h1>
      </div>
      <div className='select'>
        <HeaderSelect/>
      </div>

    </header>
  );
};
export default Header;
