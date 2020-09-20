import {combineReducers} from "redux";
import moviesReducer from "./moviesReducer";
import movieReducer from "./movieReducer";
import movieSearchReducer from "./movieSearchReducer";
import SearchHistoryReducer from "./searchHistoryReducer";


export default combineReducers({
    results: moviesReducer,
    search: movieSearchReducer,
    history: SearchHistoryReducer,
    movie: movieReducer
});