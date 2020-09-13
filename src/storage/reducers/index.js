import {combineReducers} from "redux";
import movieReducer from "./movieReducer";
import movieSearchReducer from "./movieSearchReducer";


export default combineReducers({
    results: movieReducer,
    search: movieSearchReducer
});