import {
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS, SET_LOCATION
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
        countries: payload.res,
        total: payload.totalData,
        loading: false,
        error: false,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        error: payload.status === 429 ? false : payload,
        loading: false
      };
    case SET_LOCATION:
      return {
        ...state,
        location: payload
      };
    default:
      return {
        ...state
      };
  }
};
