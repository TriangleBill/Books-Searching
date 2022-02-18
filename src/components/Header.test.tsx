import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import * as Redux from 'react-redux';
import { ActionTypes } from '../app/types';
import Header from './Header';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';



describe('Component: Header', () => {
    const mockStore = configureMockStore([thunk])
    const store = mockStore({
        searchReducer: {
            searchText: 'text',
            category: 'category',
            sorting: 'relevance',
        }
    })

    test('should render correctly', () => {

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </Provider>,
        );


        setTimeout(() => {
            expect(screen.getByText('Search for books')).toBeInTheDocument();
            expect(screen.getByText('categories')).toBeInTheDocument();
            expect(screen.getByText('Sorting by')).toBeInTheDocument();
            expect(screen.getByRole('input')).toBeInTheDocument();
            expect(screen.queryByRole('select')).toHaveLength(2)
        }, 5000);
    });

    test('should use dispatch when the search parameters change', () => {
        const dispatch = jest.fn()
        const useDispatch = jest.spyOn(Redux, 'useDispatch');
        useDispatch.mockReturnValue(dispatch);

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </Provider>,
        );


        setTimeout(() => {
            fireEvent.change(screen.getByTestId('searching-text'), { target: { value: 'q' } });
            expect(useDispatch).toBeCalledTimes(1);
            expect(dispatch).nthCalledWith(1, {
                type: ActionTypes.SetSearchText,
            });

            fireEvent.change(screen.getByTestId('category'), { target: { value: 'all' } });
            expect(useDispatch).toBeCalledTimes(1);
            expect(dispatch).nthCalledWith(1, {
                type: ActionTypes.SetCategory,
            });

            fireEvent.change(screen.getByTestId('sorting'), { target: { value: 'all' } });
            expect(useDispatch).toBeCalledTimes(1);
            expect(dispatch).nthCalledWith(1, {
                type: ActionTypes.SetSorting,
            });
        }, 5000)

    });

    test('should redirect to Main when user submtest', () => {
        const history = createMemoryHistory();
        history.push('/test-path');
        const { getByRole } = render(
            <BrowserRouter>
                <Routes>
                    <Route path={'/test-path'} element={<Header />} />
                    <Route path='/' element={<h1>Mock Main Screen</h1>} />
                </Routes>
            </BrowserRouter>,
        );

        setTimeout(() => {
            userEvent.click(getByRole('button'));
            expect(screen.getByText('Mock Main Screen')).toBeInTheDocument();
        }, 5000);

        history.push('/test-path');
        render(
            <BrowserRouter>
                <Routes>
                    <Route path={'/test-path'} element={<Header />} />
                    <Route path='/' element={<h1>Mock Main Screen</h1>} />
                </Routes>
            </BrowserRouter>,
        );

        setTimeout(() => {
            userEvent.type(screen.getByTestId('searching-text'), 'js{enter}');
            expect(screen.getByText('Mock Main Screen')).toBeInTheDocument();
        }, 5000);
    });

});