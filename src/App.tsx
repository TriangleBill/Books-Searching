import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main';
import BookPage from './components/BookPage';



function App(): JSX.Element {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />

        <Route path='/book/:id' element={
          <BookPage />
        } />
      </Routes>
    </>
  );
}

export default App;
