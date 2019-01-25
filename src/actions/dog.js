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

export const ADOPT_DOG_REQUEST = "ADOPT_DOG_REQUEST";
export const adoptDogRequest = () => ({
    type: ADOPT_DOG_REQUEST,
})

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = cat => ({
    type: ADOPT_DOG_SUCCESS,
});

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = err => ({
    type: ADOPT_DOG_ERROR,
    err
});

export const fetchDog = () => (dispatch) => {
  dispatch(fetchDogRequest());
  fetch(`${API_BASE_URL}/api/dog`, {
      method: 'GET',
  })
      .then(res => res.json())
      .then(dog => {
        console.log('success fetch dog', dog);
        if(dog.oldestDog){
          dispatch(fetchDogSuccess(dog.oldestDog))
        }
        else{
          dispatch(fetchDogError('No more dogs for adoption at this time'))
        }
      })
      .catch(err => {
        console.log("error");
          dispatch(fetchDogError(err));
      });
};

export const adoptDog = () => (dispatch) => {
  dispatch(adoptDogRequest());
  fetch(`${API_BASE_URL}/api/dog`, {
      method: 'DELETE',
  })
      .then(() => {
         dispatch(adoptDogSuccess())
      })
      //after they've adopted  the pet, we want to fetch the next cat up for  adoption
      .then(()=>{
        dispatch(fetchDog());
      })
      .catch(err => {
          dispatch(fetchDogError(err));
      });
};