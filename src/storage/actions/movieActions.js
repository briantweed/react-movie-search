import * as action from "../actionTypes";
import * as Const from "../../constants";
import store from '../store';


export const storeMovieSearch = (data) => {
    return {
        type: action.STORE_MOVIE_SEARCH,
        payload: {...data}
    }
};


export const fetchMoviesBegin = () => ({
    type: action.FETCH_MOVIES_BEGIN
});


export const fetchMoviesSuccess = (movies, fake = false) => ({
    type: action.FETCH_MOVIES_SUCCESS,
    payload: {movies},
    fake: fake
});


export const fetchMoviesFailure = (error) => ({
    type: action.FETCH_MOVIES_FAILURE,
    payload: {error}
});


export const fetchMovieBegin = () => ({
    type: action.FETCH_MOVIE_BEGIN
});


export const fetchMovieSuccess = (movie) => ({
    type: action.FETCH_MOVIE_SUCCESS,
    payload: {movie}
});


export const fetchMovieFailure = (error) => ({
    type: action.FETCH_MOVIE_FAILURE,
    payload: {error}
});


export const clearMovies = () => ({
    type: action.CLEAR_MOVIES
});


export const clearMovie = () => ({
    type: action.CLEAR_MOVIE
});


export const clearSearch = () => ({
    type: action.CLEAR_SEARCH
});


export const changePage = (page) => ({
    type: action.CHANGE_PAGE,
    page: page
});


export const fetchMovies = () => {
    return async (dispatch) => {
        dispatch(fetchMoviesBegin());
        try {
            const json = await getMovies();
            dispatch(fetchMoviesSuccess(json));
            return json;
        } catch (error) {
            dispatch(fetchMoviesFailure(error));
        }
    };
};

export const fetchMovieDetails = (movieId) => {
    return async (dispatch) => {
        dispatch(fetchMovieBegin());
        try {
            const json = await getMovie(movieId);
            dispatch(fetchMovieSuccess(json));

        } catch (error) {
            dispatch(fetchMovieFailure(error));
        }
    };
};


const getMovies = async () => {
    const filter = store.getState().search;
    const page = store.getState().results.page;
    const response = await fetch(Const.MOVIE_API_URL + "movie/search?exact=true&title=" + filter.title + "&year=" + (filter.year ? filter.year : '') + "&page=" + page + "&token=" + Const.MOVIE_API_TOKEN);
    let text = await response.text();
    let json = text && text.length ? JSON.parse(text) : {};

    if (response.ok) {
        return json;
    } else {
        throw json.error;
    }
};

const getMovie = async (movieId) => {
    const response = await fetch(Const.MOVIE_API_URL + "movie/" + movieId + "?token=" + Const.MOVIE_API_TOKEN);
    let text = await response.text();
    let json = text && text.length ? JSON.parse(text) : {};

    if (response.ok) {
        return json;
    } else {
        throw json.error;
    }
};

export const updatePage = (page) => {
    return async (dispatch) => {
        dispatch(changePage(page));
        dispatch(fetchMovies());
    };
};