import { combineReducers } from 'redux';
import { moviesReducer } from '../slicers';

const rootReducer = combineReducers({
  movies: moviesReducer
});

export default rootReducer;