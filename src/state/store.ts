import { combineReducers, createStore } from "redux";
import {Reducer} from "./reducer/Reducers";

const rootReducer= combineReducers({
    reducer:Reducer
})

export const store= createStore(rootReducer)
export type AppRootStateType=ReturnType<typeof rootReducer>

