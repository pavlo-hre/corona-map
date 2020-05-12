import React, {useContext, useEffect} from 'react';
import Header from '../Header/Header';
import MyMap from '../Map/Map';
import ModeControl from '../ModeControl/ModeControl';
import Loader from '../Loader/Loader';
import './app.scss';
import {CountriesContext} from '../../context/countries/context';


const App = () => {
  const data = useContext(CountriesContext);
  const {loading, mapIsReady} = data;
  console.log(loading, mapIsReady);

  return (
    <>
      <Header/>
      <MyMap/>
      <ModeControl/>
      {!loading && mapIsReady ? null : <Loader/>}
    </>
  );
};

export default App;
