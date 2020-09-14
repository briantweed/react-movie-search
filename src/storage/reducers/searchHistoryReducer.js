import {STORE_SEARCH_HISTORY} from "../actionTypes";


const initialState = [];


const SearchHistoryReducer = (state = initialState, action) => {
    if (action.type === STORE_SEARCH_HISTORY) {
        return[...state, action.payload];
    }
    return state;
};


export default SearchHistoryReducer;