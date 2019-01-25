import {FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS, FETCH_DOG_ERROR, ADOPT_DOG_REQUEST, ADOPT_DOG_SUCCESS, ADOPT_DOG_ERROR,} from '../actions/dog'; 

const initialState= {
  data: null,
  error: null,
  loading: false
}

export const reducer = (state = initialState, action)=> {
  if(action===FETCH_DOG_REQUEST)

  return state;
}