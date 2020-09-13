import {SET_MOVIE_SEARCH} from "../../redux/actionTypes";


const initialState = {
    title: '',
    year: ''
};


const movieSearchReducer = (state = initialState, action) => {
    if (action.type === SET_MOVIE_SEARCH) {
        return Object.assign({}, state, action.payload);
    }
    return state;
};


export default movieSearchReducer;