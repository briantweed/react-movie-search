import * as action from "../actionTypes";
import shortId from "shortid";


export const storeSearchHistory = (data) => ({
    type: action.STORE_SEARCH_HISTORY,
    payload: {...data, id: shortId.generate()}
});


export const deleteSearchItem = (id) => ({
    type: action.DELETE_SEARCH_ITEM,
    id: id
});