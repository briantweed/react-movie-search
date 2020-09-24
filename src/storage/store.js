import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import {throttle} from 'lodash';
import {loadState, saveState} from "./localStorage";


const loadedState = loadState();
const store = createStore(rootReducer, loadedState, applyMiddleware(thunk));

store.subscribe(
    throttle( () => saveState({
        search: store.getState().search,
        results: store.getState().results,
        history: store.getState().history,
        movie: store.getState().movie,
        cache: store.getState().cache,
    }), 2000)
);

export default store;