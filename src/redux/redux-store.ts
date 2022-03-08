import {combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import {saveState} from "../utils/localStorageUtills";
import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "../counter/seetingsForCounter";

export const rootReducer = combineReducers({
    counter: counterReducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})


store.subscribe(() => {
    saveState({
        counter:store.getState().counter
    });
});





export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store