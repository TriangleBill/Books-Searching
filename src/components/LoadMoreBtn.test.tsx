import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import LoadMoreBtn from './LoadMoreBtn';
import userEvent from '@testing-library/user-event';
import { ActionTypes } from '../app/types';



describe('Component: LoadMoreBtn', () => {
    const dispatch = jest.fn()

    const mockStore = configureMockStore([thunk])
    const store = mockStore({
        searchReducer: {
            searchText: 'text',
            category: 'category',
            sorting: 'relevance',
            shownBooks: 30
        }
    })

    test('should render correctly', () => {

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoadMoreBtn />
                </BrowserRouter>
            </Provider>,
        );


        setTimeout(() => {
            expect(screen.getByText('Load more')).toBeInTheDocument();
            expect(screen.getByRole('button')).toBeInTheDocument();
        }, 5000);
    });

    test('should use dispatch when button pressed', () => {

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoadMoreBtn />
                </BrowserRouter>
            </Provider>,
        );


        setTimeout(() => {
            userEvent.click(screen.getByText('Load more'));
            expect(dispatch).toBeCalledTimes(1);
            expect(dispatch).nthCalledWith(1, {
                type: ActionTypes.FetchMoreBooks,
            });
        }, 5000);
    });

});