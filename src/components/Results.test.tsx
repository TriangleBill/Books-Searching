import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { fakeBook } from './../app/mocks';
import Results from './Results';



describe('Component: Results', () => {

    const mockStore = configureMockStore([thunk])
    const store = mockStore({
        searchReducer: {
            booksList: [fakeBook, fakeBook],
            booksConter: '123'
        }
    })

    test('should render correctly', () => {

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Results />
                </BrowserRouter>
            </Provider>,
        );


        setTimeout(() => {
            expect(screen.getByText('Title')).toBeInTheDocument();
            expect(screen.getByText('Author1')).toBeInTheDocument();
            expect(screen.getByText('Author2')).toBeInTheDocument();
            expect(screen.getByText('category1')).toBeInTheDocument();
            expect(screen.getByText('category2')).toBeInTheDocument();
            expect(screen.getByRole('description')).toBeInTheDocument();
        }, 5000);
    });

});