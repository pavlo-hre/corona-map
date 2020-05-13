import React, {useContext, useEffect} from 'react';
import {CountriesContext} from '../../context/countries/context';
import Header from '../Header/Header';
import MyMap from '../Map/Map';
import ModeControl from '../ModeControl/ModeControl';
import Loader from '../Loader/Loader';
import ErrorPage from '../ErrorPage/ErrorPage';
import './app.scss';
import ErrorBoundary from '../hoc/ErrorBoundary';
import {CountriesState} from '../../context/countries/state';


const App = () => {

  useEffect(() => {
    getData();
  }, []);

  const data = useContext(CountriesContext);
  const {loading, mapIsReady, mode, setMode, getData, error} = data;

  return (
    <ErrorBoundary error={error}>
      <Header/>
      <MyMap/>
      <ModeControl mode={mode} setMode={setMode}/>
      {!loading && mapIsReady ? null : <Loader/>}
    </ErrorBoundary>
  );
};

export default App;
