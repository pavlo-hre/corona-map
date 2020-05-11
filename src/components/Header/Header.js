import React, {useContext} from 'react';
import './header.scss';
import HeaderSelect from '../Select/Select';
import InfoCard from '../InfoCard/InfoCard';
import {CountriesContext} from '../../context/countries/context';

const Header = () => {
  const {
    total: {
      NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed,
      TotalDeaths, TotalRecovered
    }
  } = useContext(CountriesContext);

  return (
    <header>
      <div>
        <h1 className='header-title'>Covid-19 Map </h1>
      </div>
      {
        TotalConfirmed
        &&
        <div className='header-info'>
          <InfoCard
            totalCount={TotalConfirmed}
            newCount={NewConfirmed}
            type='Всего'
          />
          <InfoCard
            totalCount={TotalDeaths}
            newCount={NewDeaths}
            type='Умерло'
          />
          <InfoCard
            totalCount={TotalRecovered}
            newCount={NewRecovered}
            type='Выздоровело'
          />
        </div>
      }
      <div className='header-select'>
        <HeaderSelect/>
      </div>
    </header>
  );
};
export default Header;
