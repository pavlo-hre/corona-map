import React, {useContext, useEffect} from 'react';
import {CountriesContext} from '../../context/countries/context';
import Header from '../Header/Header';
import MyMap from '../Map/Map';
import ModeControl from '../ModeControl/ModeControl';
import Loader from '../Loader/Loader';
import './app.scss';


const App = () => {

  useEffect(() => {
    getData();
  }, []);

  const data = useContext(CountriesContext);
  const {loading, mapIsReady, mode, setMode, getData} = data;

  return (
    <>
      <Header/>
      <MyMap/>
      <ModeControl mode={mode} setMode={setMode}/>
      {!loading && mapIsReady ? null : <Loader/>}
    </>
  );
};

export default App;
