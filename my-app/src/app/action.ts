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

export const setMoreBooks = createAction(
    ActionTypes.FetchMoreBooks,
    (books) => ({
        payload: {
            books
        }
    })
)

export const dropShownBooks = createAction(ActionTypes.DropHownBooks)
