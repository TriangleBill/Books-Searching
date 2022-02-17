
import { createReducer } from '@reduxjs/toolkit';
import { setBooks, setMoreBooks, dropShownBooks, setSearchText, setCategory, setSorting } from './../action';

const initialState = {
    booksConter: '',
    booksList: [],
    shownBooks: 30,
    searchText: '',
    category: 'all',
    sorting: 'relevance'
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
    .addCase(setSearchText, (state, action) => {
        const {text} = action.payload
        state.searchText = text
    })
    .addCase(setCategory, (state, action) => {
        const {category} = action.payload
        state.category = category
    })
    .addCase(setSorting, (state, action) => {
        const {sorting} = action.payload
        state.sorting = sorting
    })
    .addCase(dropShownBooks, (state, _action) => {
        state.shownBooks = 30
    })

})