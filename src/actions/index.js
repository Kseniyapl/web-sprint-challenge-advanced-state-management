import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchSmurfs = () =>{
    return (dispatch) => {
        
        dispatch(fetchStart());
        axios.get('http://localhost:3333/smurfs')
            .then(resp =>{
                dispatch(fetchSuccess(resp.data))
            })
            .catch(err=>{
               dispatch(fetchError(err))
            })
    }
}
export const fetchStart = () => {
    return({type: FETCH_START});
}
export const fetchSuccess = (smurfs) =>{
    return({type: FETCH_SUCCESS, payload: smurfs})
}
export const fetchError = (errorMessage) => {
    return({type: FETCH_ERROR, payload:errorMessage});
}
export const addSmurf = (newSmurf) =>{
    return({type: ADD_SMURF, payload: newSmurf})
}
export const setError = (error) =>{
    return ({type:SET_ERROR, payload: error})
}
