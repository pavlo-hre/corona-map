import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './InfoBlock.scss';

const InfoBlock = props => {
  const {
    cases, deaths, recovered, todayCases, todayDeaths,
  } = props;

  return (
    <div className='info-block'>
      <InfoCard
        totalCount={cases}
        newCount={todayCases}
        type='Всего'
      />
      <InfoCard
        totalCount={recovered}
        type='Выздоровело'
      />
      <InfoCard
        totalCount={deaths}
        newCount={todayDeaths}
        type='Умерло'
      />
    </div>
  );
};

export default InfoBlock;
