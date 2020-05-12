import React, {useContext} from 'react';
import './header.scss';
import HeaderSelect from '../Select/Select';
import {CountriesContext} from '../../context/countries/context';
import InfoBlock from '../InfoBlock/InfoBlock';

const Header = () => {
  const {total, total: {updated}} = useContext(CountriesContext);

  const getUpdated = time => new Date(time)
    .toLocaleString('en-GB',
      {
        day: 'numeric', month: 'long', hour: '2-digit',
        minute: '2-digit', second: '2-digit'
      });

  return (
    <header>
      <div className='title-wrap'>
        <h1 className='header-title'>Covid-19 Map </h1>
        {
          updated &&
          <div className='update-time'>Обновлено: {getUpdated(updated)}</div>
        }
      </div>
      {
        total.cases
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
