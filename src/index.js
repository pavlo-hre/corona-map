import React from 'react';
import ReactDOM from 'react-dom';
import {CountriesState} from './context/countries/state';
import App from './components/App/App';


ReactDOM.render(
  <React.StrictMode>
    <CountriesState>
      <App/>
    </CountriesState>
  </React.StrictMode>,
  document.getElementById('root')
);

