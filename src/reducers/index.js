import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR, ADD_SMURF, SET_ERROR } from './../actions';
export const initialState = {
    smurfs: [],
    isLoading: false,
    error: "" 

}


const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case(FETCH_START):
        return({
            ...state,
            smurfs:{},
            isLoading: true,
            error:''
        })
        case(FETCH_SUCCESS):
        return({
            ...state,
            smurfs: action.payload,
            isLoading: false,
            error:''
        })
        case(FETCH_ERROR):
        return({
            ...state,
            smurfs:{},
            isLoading: false,
            error:action.payload
        })
        case(ADD_SMURF):
        const newSmurf = {
            id:Date.now(),
            name:action.payload.name,
            nickname:action.payload.nickname,
            position:action.payload.position,
            description:action.payload.description
        }
        return({
            smurfs:[...state.smurfs, newSmurf]
        })
        case(SET_ERROR):
        return({
            ...state,
            error:action.payload
        })
        default:
            return state
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;
