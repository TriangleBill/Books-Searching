
import { setBook } from '../action';
import { fetchReducer } from './fetchReducer';
import { fakeBook } from './../mocks';
import { changeBookLoading } from './../action';

describe('Reducer: fetchReducer', () => {

    const state = {
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

    test('without additional parameters should return initial state', () => {
        expect(fetchReducer(state, { type: 'UNKNOWN_ACTION' }))
            .toEqual(state);
    });

    test('should update book by load book', () => {
        expect(fetchReducer(state, setBook(fakeBook)))
            .toEqual({
                bookIsLoading: true,
                book: {
                    error: null,
                    volumeInfo: {
                        title: 'Title',
                        authors: ['Author1', 'Author2'],
                        description: 'description',
                        categories: ['category1', 'category2'],
                        imageLinks: {
                            thumbnail: 'link',
                            medium: 'link',
                        }
                    }
                }
            });
    });

    test('should update bookIsLoading by load book', () => {
        expect(fetchReducer(state, changeBookLoading(false)))
            .toEqual({...state, bookIsLoading: false});
    });

});