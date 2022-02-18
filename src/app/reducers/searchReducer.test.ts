
import { fakeBooksRequest } from './../mocks';
import { dropShownBooks, setBooks, setCategory, setMoreBooks, setSearchText, setSorting } from './../action';
import { searchReducer } from './searchReducer';

describe('Reducer: searchReducer', () => {

    const state = {
        booksConter: '',
        booksList: [],
        shownBooks: 30,
        searchText: '',
        category: 'all',
        sorting: 'relevance'
    }

    test('without additional parameters should return initial state', () => {
        expect(searchReducer(state, { type: 'UNKNOWN_ACTION' }))
            .toEqual(state);
    });

    test('should update booksList and booksCounter when books is loaded', () => {
        expect(searchReducer(state, setBooks(fakeBooksRequest)))
            .toEqual({
                ...state,
                booksConter: fakeBooksRequest.totalItems,
                booksList: fakeBooksRequest.items
            });
    });

    test('should concat booksList and increase shownBooks when more books is loaded', () => {
        expect(searchReducer(state, setMoreBooks(fakeBooksRequest)))
            .toEqual({
                ...state,
                booksList: fakeBooksRequest.items,
                shownBooks: 60
            });
    });

    
    test('should update searchText when the user performs a search', () => {
        expect(searchReducer(state, setSearchText('text')))
            .toEqual({
                ...state,
                searchText: 'text'
            });
    });

    test('should update category when the user performs a search', () => {
        expect(searchReducer(state, setCategory('category')))
            .toEqual({
                ...state,
                category: 'category'
            });
    });

    test('should update sorting when the user performs a search', () => {
        expect(searchReducer(state, setSorting('sorting by')))
            .toEqual({
                ...state,
                sorting: 'sorting by'
            });
    });

    test('should return initial shownBooks', () => {
        expect(searchReducer(state, dropShownBooks()))
            .toEqual({
                ...state,
                shownBooks: 30
            });
    });
});