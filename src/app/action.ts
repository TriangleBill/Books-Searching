import { createAction } from "@reduxjs/toolkit"
import { ActionTypes } from "./types"

export const setBooks = createAction(
    ActionTypes.FetchBooks,
    (books) => ({
        payload: {
            books
        }
    })
)

export const setBook = createAction(
    ActionTypes.FetchBook,
    (data) => ({
        payload: {
            data
        }
    })
)

export const setMoreBooks = createAction(
    ActionTypes.FetchMoreBooks,
    (books) => ({
        payload: {
            books
        }
    })
)

export const setSearchText = createAction(
    ActionTypes.SetSearchText,
    (text) => ({
        payload: {
            text
        }
    })
)

export const setCategory = createAction(
    ActionTypes.SetCategory,
    (category) => ({
        payload: {
            category
        }
    })
)

export const setSorting = createAction(
    ActionTypes.SetSorting,
    (sorting) => ({
        payload: {
            sorting
        }
    })
)

export const dropShownBooks = createAction(ActionTypes.DropHownBooks)
