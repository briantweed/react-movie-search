import * as action from "../actionTypes";
import * as Const from "../../constants";
import store from '../store';


export const setMovieSearch = (data) => {
    return {
        type: action.STORE_MOVIE_SEARCH,
        payload: {...data}
    }
};


export const storeSearchHistory = (data) => ({
    type: action.STORE_SEARCH_HISTORY,
    payload: {...data}
});


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


export const clearMovies = () => ({
    type: action.CLEAR_MOVIES
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
            const json = await getFakeMovies();
            dispatch(fetchMoviesFailure(error));
            dispatch(fetchMoviesSuccess(json, true));
            return json;
        }
    };
};


const getMovies = async () => {
    const filter = store.getState().search;
    const page = store.getState().results.page;
    const response = await fetch(Const.MOVIE_API_URL + "movie/search?exact=true&title=" + filter.title + "&year=" + filter.year + "&page=" + page + "&token=" + Const.MOVIE_API_TOKEN);
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
    const data = Const.FAKE_MOVIES.filter(movie => movie.title.toLowerCase().includes(filter.title.toLowerCase()) && (filter.year ? movie.year.toString() === filter.year.toString() : true));
    return new Promise(resolve => {
        setTimeout(() => resolve({
            data: data
        }), 1000);
    });
};


export const updatePage = (page) => {
    return async (dispatch) => {
        dispatch(changePage(page));
        dispatch(fetchMovies());
    };
};