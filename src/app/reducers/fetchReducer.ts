
import { createReducer } from '@reduxjs/toolkit';
import { setBook } from './../action';

const initialState = {
    book: {
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
})