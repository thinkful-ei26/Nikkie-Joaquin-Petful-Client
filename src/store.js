import {createStore, combineReducers, applyMiddleware} from 'redux';
// import {catReducer} from './reducers/cat'
// import {dogReducer} from './reducers/dog'
import {petReducer} from './reducers/pet'
import thunk from 'redux-thunk';

const store = createStore(
  petReducer,
  applyMiddleware(thunk),
);

export default store;