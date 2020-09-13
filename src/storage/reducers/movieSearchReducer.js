import {STORE_MOVIE_SEARCH} from "../actionTypes";


const initialState = {
    title: '',
    year: ''
};


const movieSearchReducer = (state = initialState, action) => {
    if (action.type === STORE_MOVIE_SEARCH) {
        return Object.assign({}, state, action.payload);
    }
    return state;
};


export default movieSearchReducer;