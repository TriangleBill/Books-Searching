import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fetchReducer } from './app/reducers/fetchReducer';
import { combineReducers } from '@reduxjs/toolkit';

const appRender = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

const history = createMemoryHistory();

test('should render "Main" when user navigate to "/"', () => {
  history.push('/')
  render(appRender);

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

test('should render "BookPage" when user navigate to "/book/:id"', () => {
  history.push('/book/fsJSEAAAQBAJ')
  render(appRender);

  setTimeout(() => {
    expect(screen.getByText('Search for books')).toBeInTheDocument();
    expect(screen.getByText('categories')).toBeInTheDocument();
    expect(screen.getByText('Sorting by')).toBeInTheDocument();
    expect(screen.getByRole('input')).toBeInTheDocument();
    expect(screen.queryByRole('select')).toHaveLength(2)
    expect(screen.getByRole('Node.js')).toBeInTheDocument();
    expect(screen.getByRole('Computers')).toBeInTheDocument();
    expect(screen.getByRole('Каскиаро')).toBeInTheDocument();
  }, 5000);
});

test('should render "Page404" when user navigate to non-existent route', () => {
  history.push('/non-existent-route')
  render(appRender);

  setTimeout(() => {
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('The page you are looking for was not found.')).toBeInTheDocument();
    expect(screen.getByText('Back to home')).toBeInTheDocument();
  }, 5000);
});

