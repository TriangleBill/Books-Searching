import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Loader from './Loader';




describe('Component: Loader', () => {

    test('should render correctly', () => {
        render(
                <BrowserRouter>
                    <Loader />
                </BrowserRouter>
        );

        expect(screen.getByTestId('loader')).toBeInTheDocument();
        expect(screen.getByTestId('loader')).toHaveClass('spinner-border');
    });

});