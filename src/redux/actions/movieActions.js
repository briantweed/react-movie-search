import {SET_MOVIE_SEARCH, FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, CLEAR_MOVIES} from "../actionTypes";
import * as Const from "../../constants";
import store from '../store';


export const setMovieSearch = (data) => {
    return {
        type: SET_MOVIE_SEARCH,
        payload: {...data}
    }
};


export const fetchMoviesBegin = () => ({
    type: FETCH_MOVIES_BEGIN
});


export const fetchMoviesSuccess = (movies, fake = false) => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: {movies},
    fake: fake
});


export const fetchMoviesFailure = (error) => ({
    type: FETCH_MOVIES_FAILURE,
    payload: {error}
});


export const clearMovies = () => ({
    type: CLEAR_MOVIES
});


export const fetchMovies = () => {
    return async (dispatch) => {
        dispatch(fetchMoviesBegin());
        try {
            const json = await getMovies();
            dispatch(fetchMoviesSuccess(json.data));
            return json.data;
        } catch (error) {
            const json = await getFakeMovies();
            dispatch(fetchMoviesSuccess(json.data, true));
            dispatch(fetchMoviesFailure(error));
            return json.data;
        }
    };
};


const getMovies = async () => {
    const filter = store.getState().search;
    const response = await fetch(Const.MOVIE_API_URL + "movie/search?exact=true&title=" + filter.title + "&year=" + filter.year + "&token=" + Const.MOVIE_API_TOKEN);
    let text = await response.text();
    let json = text && text.length ? JSON.parse(text) : {};

    if (response.ok) {
        return json;
    } else {
        throw json.error;
    }
};


const getFakeMovies = () => {
    const filter = store.getState().search;
    const data = Const.FAKE_MOVIES.filter(movie => movie.title.toLowerCase().includes(filter.title.toLowerCase()) && (filter.year ? movie.year === filter.year : true))
    return new Promise(resolve => {
        setTimeout(() => resolve({
            data: data
        }), 1000);
    });
};