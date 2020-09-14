import {combineReducers} from "redux";
import movieReducer from "./movieReducer";
import movieSearchReducer from "./movieSearchReducer";
import SearchHistoryReducer from "./searchHistoryReducer";


export default combineReducers({
    results: movieReducer,
    search: movieSearchReducer,
    history: SearchHistoryReducer
});