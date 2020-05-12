import React, {useContext} from 'react';
import {CountriesContext} from '../../context/countries/context';
import './modeControl.scss';

const ModeControl = () => {
  const {mode, setMode} = useContext(CountriesContext);
  return (
    <button
      className='mode-btn'
      style={{
        color: mode === 'dark' && '#fff',
        backgroundColor: mode === 'dark' && '#393939',
      }}
      onClick={setMode}
    >
      {mode.toUpperCase()}
    </button>
  );
};

export default ModeControl;
