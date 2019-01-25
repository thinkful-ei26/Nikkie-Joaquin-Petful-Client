import {createStore, combineReducers, applyMiddleware} from 'redux';
import {catReducer} from './reducers/cats'
import {dogReducer} from './reducers/dogs'
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    dogs: dogReducer,
    cats: catReducer
  }),
  applyMiddleware(thunk),
);

export default store;