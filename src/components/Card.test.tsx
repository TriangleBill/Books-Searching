import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import Card from './Card';
import { fakeBook } from '../app/mocks';



describe('Component: Card', () => {
    test('should render correctly', () => {

        render(
            <BrowserRouter>
                <Card bookInfo={fakeBook} />
            </BrowserRouter>
        );

        setTimeout(() => {
            expect(screen.getByText('Title')).toBeInTheDocument();
            expect(screen.getByText('Author1')).toBeInTheDocument();
            expect(screen.getByText('Author2')).toBeInTheDocument();
            expect(screen.getByText('category1')).toBeInTheDocument();
        }, 5000);
    });

    test('should redirect to BookPage when card pressed', () => {
        const history = createMemoryHistory();
        history.push(`/`);
        render(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Card bookInfo={fakeBook} />} />
                    <Route path={`/book/${fakeBook.id}`} element={<h1>Mock BookPage Screen</h1>} />
                </Routes>
            </BrowserRouter>,
        );

        setTimeout(() => {
            userEvent.click(screen.getByTestId('book-card'));
            expect(screen.getByText('Mock BookPage Screen')).toBeInTheDocument();
        }, 5000);

    });

});