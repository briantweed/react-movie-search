import {CACHE} from "../actionTypes";


const initialState = [];


const CacheReducer = (state = initialState, action) => {

    switch(action.type) {
        case CACHE:
            return [...state,
                {
                    [action.payload.details.imdbId] : action.payload
                }
            ];

        default:
            return state;
    }

};


export default CacheReducer;