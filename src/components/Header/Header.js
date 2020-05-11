import React, {useContext} from 'react';
import './header.scss';
import HeaderSelect from '../Select/Select';
import {CountriesContext} from '../../context/countries/context';
import InfoBlock from '../InfoBlock/InfoBlock';

const Header = () => {
  const {total, total: {TotalConfirmed}} = useContext(CountriesContext);

  return (
    <header>
      <div>
        <h1 className='header-title'>Covid-19 Map </h1>
      </div>
      {
        TotalConfirmed
        &&
        <InfoBlock {...total}/>
      }
      <div className='header-select'>
        <HeaderSelect/>
      </div>
    </header>
  );
};
export default Header;
