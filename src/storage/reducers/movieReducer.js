import {FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, CLEAR_MOVIES} from "../actionTypes";


const initialState = {
    movies: [],
    fake: false,
    loading: false,
    error: null
};


const movieReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_MOVIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                fake: action.fake,
                movies: action.payload.movies.sort((a, b) => (a.title > b.title) ? 1 : -1)
            };

        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                movies: []
            };

        case CLEAR_MOVIES:
            return initialState;

        default:
            return state;
    }

};


export default movieReducer;