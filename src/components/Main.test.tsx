import { createMemoryHistory } from "history";
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './Page404';
import userEvent from "@testing-library/user-event";
import Main from './Main';
import { Provider } from "react-redux";
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { fakeBook } from './../app/mocks';



describe('Component: Main', () => {

    const mockStore = configureMockStore([thunk])
    const store = mockStore({
        fetchReducer: {
            booksList: [fakeBook, fakeBook],
            booksConter: '123'
        },
        searchReducer: {
            bookIsLoading: false
        }
    })

    test('should render correctly', () => {

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </Provider>,
        );


        setTimeout(() => {
            expect(screen.getByText('Search for books')).toBeInTheDocument();
            expect(screen.getByText('Found')).toBeInTheDocument();
            expect(screen.getByText('result')).toBeInTheDocument();
            expect(screen.getByText('categories')).toBeInTheDocument();
            expect(screen.getByText('Sorting by')).toBeInTheDocument();
            expect(screen.getByRole('input')).toBeInTheDocument();
            expect(screen.queryByRole('select')).toHaveLength(2)
          }, 5000);

    });

    test('should redirect to Main when user click button', () => {
        const history = createMemoryHistory();
        history.push('/qweqwe');
        render(
            <BrowserRouter>
                <Routes>
                    <Route path={'/qweqwe'} element={<Page404 />} />
                    <Route path='/' element={<h1>Mock Main Screen</h1>} />
                </Routes>
            </BrowserRouter>,
        );
        setTimeout(() => {
            userEvent.click(screen.getByText('Back to Home'));
            expect(screen.getByText('Mock Main Screen')).toBeInTheDocument();
        }, 5000);

    });
});