import React, {useReducer} from 'react';
import {CountriesContext} from './context';
import {
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS, SET_LOADING,
  SET_LOCATION,
  SET_MODE,
} from '../actionTypes';
import {getCountry} from '../../api/getCountry';
import {CountriesReducer} from './reducer';


export const CountriesState = ({children}) => {
  const initialState = {
    countries: [],
    total: {},
    location: null,
    lastLocation: {},
    loading: false,
    mapIsReady: false,
    error: false,
    updateTime: null,
    mode: 'dark'
  };

  const [state, dispatch] = useReducer(CountriesReducer, initialState);

  const getData = async () => {
    dispatch({
      type: FETCH_DATA_START,
    });
    try {
      const data = await getCountry();
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: data
      });
    } catch (e) {
      console.error(e);
      dispatch({
        type: FETCH_DATA_ERROR,
        payload: e.response || e
      });
    }
  };

  const setLocation = location => {
    dispatch({
      type: SET_LOCATION,
      payload: location
    });
  };

  const setMode = () => {
    dispatch({
      type: SET_MODE
    });
  };

  const changeLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  return (
    <CountriesContext.Provider
      value={{...state, setMode, getData, setLocation, changeLoading}}>
      {children}
    </CountriesContext.Provider>
  );
};
