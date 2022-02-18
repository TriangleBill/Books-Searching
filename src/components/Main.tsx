import Header from './Header'
import LoadMoreBtn from './LoadMoreBtn'
import Results from './Results'
import { useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';
import Loader from './Loader';


export default function Main(): JSX.Element {
    const booksList = useSelector((state: RootState) => {
        const { searchReducer } = state
        return searchReducer.booksList
    })

    const bookIsLoading = useSelector((state: RootState) => {
        const {fetchReducer} = state
        return fetchReducer.bookIsLoading
    })
    
    const booksCounter = useSelector((state: RootState) => {
        const { searchReducer } = state
        return searchReducer.booksConter
    })

    const resultRender = (): JSX.Element => {
        if (bookIsLoading) {
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
                    <LoadMoreBtn  />
                }

            </>

        )
    }

    return (
        <>
            <Header  />
            {resultRender()}
        </>
    )
}
