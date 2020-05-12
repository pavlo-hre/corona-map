import React from 'react';
import './modeControl.scss';

const ModeControl = props => {
  const {mode, setMode} = props;
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
