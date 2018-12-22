// In client/src/actions/cheese.js add an async action called fetchCheeses which uses the Fetch API to make a GET request to your /api/cheeses endpoint.

// The async action should dispatch its sync counterparts, fetchCheesesRequest, fetchCheesesSuccess and fetchCheesesError

import {API_BASE_URL} from '../config'

export const fetchCheesesSuccess = (cheeses) =>{

    return {
        type: 'FETCH_CHEESES_SUCCESS',
        cheeses
    }
}


export const fetchCheeses = () => {
return(dispatch) =>{
    fetch(`${API_BASE_URL}/api/cheeses`)
    .then(response => response.json())
    .then(cheeses => console.log('this is the server response?',cheeses))
    .catch(error => console.log('any errors here?',error));
}
}