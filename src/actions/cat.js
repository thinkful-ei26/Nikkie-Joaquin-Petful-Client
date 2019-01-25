import {API_BASE_URL} from '../config';

export const FETCH_CAT_REQUEST = "FETCH_CAT_REQUEST";
export const fetchCatRequest = () => ({
    type: FETCH_CAT_REQUEST,
})

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
    type: FETCH_CAT_SUCCESS,
    cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = err => ({
    type: FETCH_CAT_ERROR,
    err
});

export const ADOPT_CAT_REQUEST = "ADOPT_CAT_REQUEST";
export const adoptCatRequest = () => ({
    type: ADOPT_CAT_REQUEST,
})

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = cat => ({
    type: ADOPT_CAT_SUCCESS,
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = err => ({
    type: ADOPT_CAT_ERROR,
    err
});

export const fetchCat = () => (dispatch) => {
  dispatch(fetchCatRequest());
  fetch(`${API_BASE_URL}/api/cat`, {
      method: 'GET',
  })
      .then(res => res.json())
      .then(cat => {
         dispatch(fetchCatSuccess(cat))
      })
      .catch(err => {
          dispatch(fetchCatError(err));
      });
};

export const adoptCat = () => (dispatch) => {
  dispatch(adoptCatRequest());
  fetch(`${API_BASE_URL}/api/cat`, {
      method: 'DELETE',
  })
      .then(res => res.json())
      .then(() => {
         dispatch(adoptCatSuccess())
      })
      //after they've adopted  the pet, we want to fetch the next cat up for  adoption
      .then(()=>{
        dispatch(fetchCat());
      })
      .catch(err => {
          dispatch(fetchCatError(err));
      });
};