import { combineReducers } from "@reduxjs/toolkit";
import { searchReducer } from './reducers/searchReducer';
import {fetchReducer} from './reducers/fetchReducer'

export const rootReducer = combineReducers({
    searchReducer,
    fetchReducer
})

export type RootState = ReturnType<typeof rootReducer>