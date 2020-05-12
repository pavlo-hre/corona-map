import React from 'react';
import ReactLoading from 'react-loading';
import './loader.scss';

const Loader = () => {
  return (
    <div className='loader'>
      <ReactLoading
        type={'spinningBubbles'}
        color={'rgba(15,97,168,0.5)'}
        width={'25%'}/>
    </div>
  );
};

export default Loader;
