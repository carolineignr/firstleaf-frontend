import { combineReducers } from 'redux';
import { countriesReducer } from '../slicers';

const rootReducer = combineReducers({
  countries: countriesReducer
});

export default rootReducer;