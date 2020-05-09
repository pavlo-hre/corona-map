import React from 'react';
import './header.scss';
import HeaderSelect from '../Select/Select';

const Header = props => {
  return (
    <header>
      <div className='container'>
        header
        <HeaderSelect/>
      </div>
    </header>
  );
};
export default Header;
