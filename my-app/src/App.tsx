import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  );
}

export default App;
