import {FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR, ADOPT_CAT_REQUEST, ADOPT_CAT_SUCCESS, ADOPT_CAT_ERROR,} from '../actions/cat'; 

const initialState= {
  data: null,
  error: null,
  loading: false
}

export const reducer = (state = initialState, action)=> {
  if(action===FETCH_CAT_REQUEST)

  return state;
}