import {STORE_SEARCH_HISTORY} from "../actionTypes";


const initialState = [];


const SearchHistoryReducer = (state = initialState, action) => {
    if (action.type === STORE_SEARCH_HISTORY) {
        let results = [...state,
            {
                ...action.payload,
                time: new Date(Date.now()).toLocaleString()
            }
        ];
        return results.sort((a,b) => b.time > a.time ? 1 : -1)
    }
    return state;
};


export default SearchHistoryReducer;