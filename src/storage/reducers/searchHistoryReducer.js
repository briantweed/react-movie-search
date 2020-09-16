import {DELETE_SEARCH_ITEM, STORE_SEARCH_HISTORY} from "../actionTypes";


const initialState = [];


const SearchHistoryReducer = (state = initialState, action) => {

    switch(action.type) {
        case STORE_SEARCH_HISTORY:
            let results = [...state,
                {
                    ...action.payload,
                    time: new Date(Date.now()).toLocaleString()
                }
            ];
            return results.sort((a, b) => b.time > a.time ? 1 : -1);

        case DELETE_SEARCH_ITEM:
            return state.filter(history => history.id !== action.id);

        default:
            return state;
    }

};


export default SearchHistoryReducer;