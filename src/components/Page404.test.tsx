import { createMemoryHistory } from "history";
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './Page404';
import userEvent from "@testing-library/user-event";


describe('Component: Page404', () => {

    test('should render correctly', () => {

      render(
        <BrowserRouter>
          <Page404 />
        </BrowserRouter>,
      );
  
  
      setTimeout(() => {
        expect(screen.getByText('404')).toBeInTheDocument();
        expect(screen.getByText('The page you are looking for was not found.')).toBeInTheDocument();
        expect(screen.getByText('Back to Home')).toBeInTheDocument();
      }, 5000);
  
    });
  
    test('should redirect to Main when user click button', () => {
      const history = createMemoryHistory();
      history.push('/qweqwe');
      render(
        <BrowserRouter>
          <Routes>
            <Route path={'/qweqwe'} element={<Page404 />}/>
            <Route path='/' element={<h1>Mock Main Screen</h1>}/>
          </Routes>
        </BrowserRouter>,
      );
      setTimeout(() => {
        userEvent.click(screen.getByText('Back to Home'));
        expect(screen.getByText('Mock Main Screen')).toBeInTheDocument();
      }, 5000);
  
    });
  });