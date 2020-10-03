import * as action from "../actionTypes";
import * as Const from "../../constants";
import store from '../store';
import {ADAPTOR} from "../../constants";
import {apiCall} from "../../helpers";


export const storeMovieSearch = (data) => {
    return {
        type: action.STORE_MOVIE_SEARCH,
        payload: {...data}
    }
};


export const fetchMoviesBegin = () => ({
    type: action.FETCH_MOVIES_BEGIN
});


export const fetchMoviesSuccess = (movies) => ({
    type: action.FETCH_MOVIES_SUCCESS,
    payload: {movies}
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
    payload: movie
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


export const updateCache = (movie) => ({
    type: action.CACHE,
    payload: movie
});


export const fetchMovies = () => {
    return async (dispatch) => {
        dispatch(fetchMoviesBegin());
        try {
            const filter = store.getState().search;
            const page = store.getState().results.page;
            const {ApiAdaptor} = await import('../../adaptors/' + ADAPTOR);
            const adaptor = new ApiAdaptor();
            const json = await adaptor.fetchMovies(filter, page);
            dispatch(fetchMoviesSuccess(json));
            return json;
        } catch (error) {
            dispatch(fetchMoviesFailure(error));
        }
    };
};


export const fetchMovie = (movieId) => {
    return async (dispatch) => {
        dispatch(fetchMovieBegin());
        try {
            const cache = store.getState().cache;
            const cached = cache.find(movie => movie.id === movieId);
            if (cached) {
                dispatch(fetchMovieSuccess(cached));
            } else {
                const {ApiAdaptor} = await import('../../adaptors/' + ADAPTOR);
                const adaptor = new ApiAdaptor();
                const json = await adaptor.fetchMovie(movieId);

                console.log(json);

                // const details = await getMovie(movieId);
                // const cast = await getCast(movieId);
                // const crew = await getCrew(movieId);
                // data.details = details.data;
                // data.cast = cast.data;
                // data.crew = crew.data;
                dispatch(fetchMovieSuccess(json));
                dispatch(updateCache(json));
            }
        } catch (error) {
            dispatch(fetchMovieFailure(error));
        }
    };
};


export const fetchPreviousMovieDetails = (movieId) => {
    return async (dispatch) => {
        const cache = store.getState().cache;
        const thisMovie = cache.findIndex(movie => movie.id === movieId);
        const nextMovie = cache[thisMovie - 1];
        if (nextMovie){
            dispatch(fetchMovieSuccess(nextMovie));
        }
    };
};



export const fetchNextMovieDetails = (movieId) => {
    return async (dispatch) => {
        const cache = store.getState().cache;
        const thisMovie = cache.findIndex(movie => movie.id === movieId);
        const nextMovie = cache[thisMovie + 1];
        if (nextMovie){
            dispatch(fetchMovieSuccess(nextMovie));
        }
    };
};


export const updatePage = (page) => {
    return async (dispatch) => {
        dispatch(changePage(page));
        dispatch(fetchMovies());
    };
};


const getMovie = async (movieId) => {
    const {ApiAdaptor} = await import('../../adaptors/' + ADAPTOR);
    const adaptor = new ApiAdaptor();
    return adaptor.fetchMovie(movieId);
    // return await apiCall(Const.MOVIE_API_URL + "movie/" + movieId + "?token=" + Const.MOVIE_API_TOKEN);
};


const getCast = async (movieId) => {
    return await apiCall(Const.MOVIE_API_URL + "movie/" + movieId + "/actors?token=" + Const.MOVIE_API_TOKEN);
};


const getCrew = async (movieId) => {
    return await apiCall(Const.MOVIE_API_URL + "movie/" + movieId + "/crew?token=" + Const.MOVIE_API_TOKEN);
};