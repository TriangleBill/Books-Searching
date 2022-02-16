
import { createReducer } from '@reduxjs/toolkit';
import { setBooks, setMoreBooks, dropShownBooks } from './../action';

const initialState = {
    booksConter: '',
    booksList: [],
    shownBooks: 30
}

export const searchReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(setBooks, (state, action) => {
        const {books} = action.payload
        state.booksList = books.items
        state.booksConter = books.totalItems
    })
    .addCase(setMoreBooks, (state, action) => {
        const {books} = action.payload
        state.booksList = state.booksList.concat(books.items)
        state.shownBooks += 30
    })
    .addCase(dropShownBooks, (state, _action) => {
        state.shownBooks = 30
    })
})