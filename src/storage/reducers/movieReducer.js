import {FETCH_MOVIE_BEGIN, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE, CLEAR_MOVIE} from "../actionTypes";


const initialState = {
    movie: {},
    loading: false,
    error: null
};


const movieReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_MOVIE_BEGIN:
            return {
                loading: true,
                error: null,
                movie: {}
            };

        case FETCH_MOVIE_SUCCESS:
            return {
                loading: false,
                error: null,
                movie: action.payload
            };

        case FETCH_MOVIE_FAILURE:
            return {
                loading: false,
                error: action.payload.error,
                movie: {},
            };

        case CLEAR_MOVIE:
            return initialState;

        default:
            return state;
    }

};


export default movieReducer;