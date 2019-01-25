import {API_BASE_URL} from '../config';

export const FETCH_DOG_REQUEST = "FETCH_DOG_REQUEST";
export const fetchDogRequest = () => ({
    type: FETCH_DOG_REQUEST,
})

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
    type: FETCH_DOG_SUCCESS,
    dog
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = err => ({
    type: FETCH_DOG_ERROR,
    err
});

export const fetchDog = () => (dispatch) => {
  dispatch(fetchDogRequest());
  fetch(`${API_BASE_URL}/api/dog`, {
      method: 'GET',
  })
      .then(res => res.json())
      .then(dog => {
         dispatch(fetchDogSuccess(dog))
      })
      .dogch(err => {
          dispatch(fetchDogError(err));
      });
};