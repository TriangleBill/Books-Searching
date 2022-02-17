import { toast } from 'react-toastify';
import { setBooks, setMoreBooks, dropShownBooks, setBook } from './action';
import { KEY_API } from './types';

export function fetchBooks(search: string, sorting: string, category: string) {
    return async (dispatch: Function) => {
        dispatch(dropShownBooks())
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}${(category === 'all') ? '' : `;subject:${category}`}:&orderBy=${sorting}&maxResults=30&key=${KEY_API}`)
            const json = await response.json()
            dispatch(setBooks(json))
        } catch (error) {
            toast.error(`Ошибка при получении данных из сервера: ${error}`)
        }
    }
}

export function fetchMoreBooks(search: string, sorting: string, category: string, startIndex: number) {
    return async (dispatch: Function) => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}${(category === 'all') ? '' : `;subject:${category}`}:&orderBy=${sorting}&maxResults=30&startIndex=${startIndex}&key=${KEY_API}`)
            const json = await response.json()
            dispatch(setMoreBooks(json))
        } catch (error) {
            toast.error(`Ошибка при получении данных из сервера: ${error}`)
        }

    }
}

export function fetchBook(bookId: string) {
    return async (dispatch: Function) => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${KEY_API}`)
            const json = await response.json()
            dispatch(setBook(json))
        } catch (error) {
            toast.error(`Ошибка при получении данных из сервера: ${error}`)
        }


    }
}