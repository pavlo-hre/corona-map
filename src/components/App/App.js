import React, {useEffect} from 'react';
import './app.scss';
import Header from '../Header/Header';
import {getCountry} from '../../api/getCountry';
import MyMap from '../Map/Map';
import {CountriesState} from '../../context/countries/state';


function App() {


  return (
    <>
      <CountriesState>
        {/*<Header/>*/}
        <MyMap/>;
      </CountriesState>
    </>
  );
}

export default App;
