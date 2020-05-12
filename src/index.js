import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {CountriesState} from './context/countries/state';


ReactDOM.render(
  <React.StrictMode>
    <CountriesState>
      <App/>
    </CountriesState>
  </React.StrictMode>,
  document.getElementById('root')
);

