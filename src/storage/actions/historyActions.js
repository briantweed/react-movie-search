import {STORE_SEARCH_HISTORY, DELETE_SEARCH_ITEM } from "../actionTypes";
import shortId from "shortid";


export const storeSearchHistory = (data) => ({
    type: STORE_SEARCH_HISTORY,
    payload: {...data, id: shortId.generate()}
});


export const deleteSearchItem = (id) => ({
    type: DELETE_SEARCH_ITEM,
    id: id
});