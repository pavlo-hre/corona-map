import {
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS, SET_LOADING, SET_LOCATION, SET_MODE
} from '../actionTypes';

export const CountriesReducer = (state, {type, payload}) => {
  switch (type) {
    case FETCH_DATA_START:
      return {
        ...state, loading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        countries: payload.result.filter(el => el.name),
        total: payload.totalData,
        loading: false,
        error: false,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        error: payload.status === 429 ? false : payload,
        loading: false,
      };
    case SET_LOCATION:
      return {
        ...state,
        location: payload,
        lastLocation: state.location
      };
    case SET_LOADING:
      return {
        ...state,
        mapIsReady: true,
      };
    case SET_MODE:
      return {
        ...state,
        mode: state.mode === 'light' ? 'dark' : 'light'
      };
    default:
      return {
        ...state
      };
  }
};
