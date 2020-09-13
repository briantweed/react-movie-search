import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import {loadState, saveState} from "./localStorage";

const loadedState = loadState();
const store = createStore(rootReducer, loadedState, applyMiddleware(thunk));

store.subscribe(() => {
    saveState({
        search: store.getState().search,
        results: store.getState().results
    });
});


export default store;