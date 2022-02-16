import Header from './Header'
import LoadMoreBtn from './LoadMoreBtn'
import Results from './Results'
import { useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';
import Loader from './Loader';
import { useState } from 'react';

export default function Main(): JSX.Element {
    const [searchText, setSearchText] = useState('')
    const [category, setCategory] = useState('All')
    const [sorting, setSorting] = useState('relevance')

    const booksList = useSelector((state: RootState) => {
        const { searchReducer } = state
        return searchReducer.booksList
    })

    const booksCounter = useSelector((state: RootState) => {
        const { searchReducer } = state
        return searchReducer.booksConter
    })

    const resultRender = (): JSX.Element => {
        if (booksList && !booksList.length) {
            return (
                <div className="wrapper mt-5 p-5">
                    <Loader />
                </div>
            )
        } else if (!booksList) {
            return (
                <div className="wrapper mt-5 p-5">
                    <h1>Nothing found</h1>
                </div>
            )
        }

        return (
            <>
                <Results />

                {(Number(booksCounter) <= booksList.length) ? '' :
                    <LoadMoreBtn
                        searchText={searchText}
                        category={category}
                        sorting={sorting}
                    />
                }

            </>

        )
    }

    return (
        <>
            <Header
                searchText={searchText}
                setSearchText={setSearchText}
                category={category}
                setCategory={setCategory}
                sorting={sorting}
                setSorting={setSorting}
            />

            {resultRender()}
        </>
    )
}
