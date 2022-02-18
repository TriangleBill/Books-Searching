
import { createReducer } from '@reduxjs/toolkit';
import { changeBookLoading, setBook } from './../action';

const initialState = {
    bookIsLoading: true,
    book: {
        error: null,
        volumeInfo: {
            title: '',
            authors: [],
            description: '',
            categories: [],
            imageLinks: {
                thumbnail: '',
                medium: '',
            }
        }
    }
}

export const fetchReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(setBook, (state, action) => {
        const {data} = action.payload
        state.book = data
    })
    .addCase(changeBookLoading, (state, action) => {
        const {data} = action.payload
        state.bookIsLoading = data
    })
})