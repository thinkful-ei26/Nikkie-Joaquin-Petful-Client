import {API_BASE_URL} from '../config';

export const FETCH_PET_REQUEST = "FETCH_PET_REQUEST";
export const fetchPetRequest = () => ({
    type: FETCH_PET_REQUEST,
})

export const FETCH_PET_SUCCESS = 'FETCH_PET_SUCCESS';
export const fetchPetSuccess = pet => ({
    type: FETCH_PET_SUCCESS,
    pet
});

export const FETCH_PET_ERROR = 'FETCH_PET_ERROR';
export const fetchPetError = err => ({
    type: FETCH_PET_ERROR,
    err
});

export const ADOPT_PET_REQUEST = "ADOPT_PET_REQUEST";
export const adoptPetRequest = () => ({
    type: ADOPT_PET_REQUEST,
})

export const ADOPT_PET_SUCCESS = 'ADOPT_PET_SUCCESS';
export const adoptPetSuccess = pet => ({
    type: ADOPT_PET_SUCCESS,
});

export const ADOPT_PET_ERROR = 'ADOPT_PET_ERROR';
export const adoptPetError = err => ({
    type: ADOPT_PET_ERROR,
    err
});

export const fetchPet = (species) => (dispatch) => {
    console.log('species is',species)
  dispatch(fetchPetRequest());
  fetch(`${API_BASE_URL}/api/${species}`, {
      method: 'GET',
  })
      .then(res => res.json())
      .then(pet => {
        console.log('success fetch pet', pet);
        if(pet.oldestPet){
          dispatch(fetchPetSuccess(pet.oldestPet))
        }
        else{
          dispatch(fetchPetError('No more pets for adoption at this time'))
        }
      })
      .catch(err => {
        console.log("error");
          dispatch(fetchPetError(err));
      });
};

export const adoptPet = (species) => (dispatch) => {
  dispatch(adoptPetRequest());
  fetch(`${API_BASE_URL}/api/${species}`, {
      method: 'DELETE',
  })
      .then(() => {
         dispatch(adoptPetSuccess())
      })
      //after they've adopted  the pet, we want to fetch the next cat up for  adoption
      .then(()=>{
        dispatch(fetchPet());
      })
      .catch(err => {
          dispatch(fetchPetError(err));
      });
};