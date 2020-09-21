import {FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, CLEAR_MOVIES, CHANGE_PAGE} from "../actionTypes";


const initialState = {
    movies: [],
    page: 1,
    pages: 0,
    loading: false,
    error: null
};


const moviesReducer = (state = initialState, action) => {

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
                movies: action.payload.movies.data.sort((a, b) => (a.title > b.title) ? 1 : -1),
                pages: Math.ceil(action.payload.movies.total / 20),
                error: null
            };

        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                page: 1,
                pages: 0,
            };

        case CLEAR_MOVIES:
            return initialState;

        case CHANGE_PAGE:
            return {
                ...state,
                page: action.page,
                error: null
            };

        default:
            return state;
    }

};


export default moviesReducer;