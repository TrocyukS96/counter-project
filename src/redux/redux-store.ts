import {counterReducer} from "./redux-reducer"
import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localStorageUtills";

export const rootReducer = combineReducers({
    counter: counterReducer
})
export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter:store.getState().counter
    });
});





export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store