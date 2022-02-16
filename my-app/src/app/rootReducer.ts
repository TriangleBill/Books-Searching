import { combineReducers } from "@reduxjs/toolkit";
import { searchReducer } from './reducers/searchReducer';

export const rootReducer = combineReducers({
    searchReducer,
})

export type RootState = ReturnType<typeof rootReducer>