import {createStore, combineReducers, applyMiddleware} from 'redux';
import {catReducer} from './reducers/cat'
import {dogReducer} from './reducers/dog'
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    dogs: dogReducer,
    cats: catReducer
  }),
  applyMiddleware(thunk),
);

export default store;