import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './InfoBlock.scss';

const InfoBlock = props => {
  const {
    NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed,
    TotalDeaths, TotalRecovered
  } = props;

  return (
    <div className='info-block'>
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
  );
};

export default InfoBlock;
