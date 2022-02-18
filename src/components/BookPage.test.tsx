import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { fakeBook } from '../app/mocks';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import BookPage from './BookPage';
import * as Redux from 'react-redux'
import { ActionTypes } from '../app/types';



describe('Component: BookPage', () => {
    const mockStore = configureMockStore([thunk])
    const store = mockStore({
        fetchReducer: {
            bookIsLoading: true,
            book: fakeBook,
        },
        searchReducer: {
            searchText: 'text',
            category: 'category',
            sorting: 'relevance',
        }
    })

    it('should render correctly', () => {

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <BookPage />
                </BrowserRouter>
            </Provider>,
        );


        setTimeout(() => {
            expect(screen.getByText('qweqweqw')).toBeInTheDocument();
            expect(screen.getByText('Authqweqor1')).toBeInTheDocument();
            expect(screen.getByText('qweqwewew')).toBeInTheDocument();
            expect(screen.getByText('decription')).toBeInTheDocument();
        }, 5000);
    });

    test('should use dispatch when page is loaded', () => {
        const dispatch = jest.fn()
        const useDispatch = jest.spyOn(Redux, 'useDispatch');
        useDispatch.mockReturnValue(dispatch);

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <BookPage />
                </BrowserRouter>
            </Provider>,
        );


        setTimeout(() => {
            expect(useDispatch).toBeCalledTimes(1);
            expect(dispatch).nthCalledWith(1, {
                type: ActionTypes.FetchBook,
            });
        }, 5000)

    });

});