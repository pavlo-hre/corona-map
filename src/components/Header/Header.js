import React, {useContext} from 'react';
import {CountriesContext} from '../../context/countries/context';
import HeaderSelect from '../Select/Select';
import InfoBlock from '../InfoBlock/InfoBlock';
import './header.scss';


const Header = () => {
  const {
    countries, setLocation, location, total, total: {updated}
  } = useContext(CountriesContext);

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
        <HeaderSelect
          countries={countries}
          setLocation={setLocation}
          location={location}/>
      </div>
    </header>
  )
    ;
};
export default Header;
