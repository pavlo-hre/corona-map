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
        totalCount={deaths}
        newCount={todayDeaths}
        type='Умерло'
      />
      <InfoCard
        totalCount={recovered}
        type='Выздоровело'
      />
    </div>
  );
};

export default InfoBlock;
