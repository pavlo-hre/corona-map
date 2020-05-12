import React from 'react';
import './infoCard.scss';


const InfoCard = props => {
  const {totalCount, newCount, type} = props;
  const bgStyles = {
    backgroundColor: type === 'Всего'
      ?
      '#db2a2a'
      :
      type === 'Выздоровело'
        ?
        '#1e7d23'
        :
        '#3255a6'
  };

  return (
    <div className='info-card'>
      <div className='info-total'>
        {totalCount.toLocaleString('ru-RU')}
      </div>
      {
        newCount >= 0 &&
        <span
          className='info-new'
          style={bgStyles}
        >
        {newCount ? `+ ${newCount.toLocaleString('ru-RU')}` : 0}
      </span>
      }
      <div className='info-title'>
        {type}
      </div>
    </div>
  );
};

export default InfoCard;
