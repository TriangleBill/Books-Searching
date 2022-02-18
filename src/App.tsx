import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main';
import BookPage from './components/BookPage';
import Page404 from './components/Page404';



function App(): JSX.Element {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />

        <Route path='/book/:id' element={
          <BookPage />
        } />

        <Route path='*' element={<Page404 />}/>
      </Routes>
    </>
  );
}

export default App;
