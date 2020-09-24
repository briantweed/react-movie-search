import {combineReducers} from "redux";
import moviesReducer from "./moviesReducer";
import movieReducer from "./movieReducer";
import movieSearchReducer from "./movieSearchReducer";
import searchHistoryReducer from "./searchHistoryReducer";
import cacheReducer from "./cacheReducer";


export default combineReducers({
    results: moviesReducer,
    search: movieSearchReducer,
    history: searchHistoryReducer,
    movie: movieReducer,
    cache: cacheReducer
});