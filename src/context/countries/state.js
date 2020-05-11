import React, {useReducer} from 'react';
import {CountriesContext} from './context';
import {
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS, SET_LOCATION,
} from '../actionTypes';
import {getCountry} from '../../api/getCountry';
import {CountriesReducer} from './reducer';


export const CountriesState = ({children}) => {
  const initialState = {
    countries: null,
    total: {},
    location: null,
    loading: false,
    error: false
  };

  const [state, dispatch] = useReducer(CountriesReducer, initialState);

  const getData = async () => {
    dispatch({
      type: FETCH_DATA_START
    });
    try {
      const data = await getCountry();
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: data
      });
    } catch (e) {
      console.error(e);
      if (e.response && e.response.status === 429) {
        getData();
      }
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

  return (
    <CountriesContext.Provider value={{...state, getData, setLocation}}>
      {children}
    </CountriesContext.Provider>
  );
};
