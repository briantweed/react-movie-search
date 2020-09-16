import {STORE_MOVIE_SEARCH} from "../actionTypes";


const initialState = {
    title: '',
    year: ''
};


const movieSearchReducer = (state = initialState, action) => {

    switch(action.type) {
        case STORE_MOVIE_SEARCH:
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }
};


export default movieSearchReducer;