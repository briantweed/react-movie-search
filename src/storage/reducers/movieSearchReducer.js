import {STORE_MOVIE_SEARCH, CLEAR_SEARCH} from "../actionTypes";


const initialState = {
    title: '',
    year: ''
};


const movieSearchReducer = (state = initialState, action) => {

    switch(action.type) {
        case STORE_MOVIE_SEARCH:
            return Object.assign({}, state, action.payload);

        case CLEAR_SEARCH :
            return initialState;

        default:
            return state;
    }
};


export default movieSearchReducer;