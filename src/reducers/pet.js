import {FETCH_PET_REQUEST, FETCH_PET_SUCCESS, FETCH_PET_ERROR, ADOPT_PET_REQUEST, ADOPT_PET_SUCCESS, ADOPT_PET_ERROR,} from '../actions/pet'; 

const initialState= {
  data: [],
  error: null,
  loading: false
}

export const petReducer = (state = initialState, action)=> {
  if(action.type===FETCH_PET_REQUEST){
    return Object.assign({}, state, {
      loading: true
    })
  }

  else if(action.type===FETCH_PET_SUCCESS){
    console.log('LOG PET',action.pet)
    return Object.assign({}, state, {
      loading: false,
      error: null,
      data: [...state.data, action.pet]
    })
  }

  else if(action.type===FETCH_PET_ERROR){
    return Object.assign({}, state, {
      loading: false,
      error: action.err
    })
  }

  else if(action.type===ADOPT_PET_REQUEST){
    return Object.assign({}, state, {
      loading: true
    })
  }

  else if(action.type===ADOPT_PET_SUCCESS){
    return Object.assign({}, state, {
      loading: false,
      error: null,
    })
  }

  else if (action.type===ADOPT_PET_ERROR){
    return Object.assign({}, state, {
      loading: false,
      error: action.err,
    })
  }

  return state;
}