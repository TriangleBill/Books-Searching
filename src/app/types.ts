export const KEY_API = 'AIzaSyDEJ75vmqe3S4WwOPXNKjyjGoEyOn2Ez7Q'


export enum ActionTypes {
    FetchBooks = 'search/FETCH_BOOKS',
    FetchMoreBooks = 'search/FETCH_MORE_BOOKS',
    FetchBook = 'book/FETCH_BOOK',
    ChangeBookLoading = 'book/CHANGE_BOOK_LOADING',
    DropHownBooks = 'search/DROP_SHOWN_BOOKS',
    SetSearchText = 'search/SET_SEARCH_TEXT',
    SetCategory = 'search/SET_CATEGORY',
    SetSorting = 'search/SET_SORTING'
}

export type BookType = {
    error: null,
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        description: string,
        categories: string[],
        imageLinks: {
            thumbnail: string,
            medium: string,
        }
    }
}