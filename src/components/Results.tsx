import Card from './Card'
import { useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer'
import { BookType } from '../app/types';


export default function Results(): JSX.Element {
    const booksList = useSelector((state: RootState) => {
        const { searchReducer } = state
        return searchReducer.booksList
    })
    const booksCounter = useSelector((state: RootState) => {
        const { searchReducer } = state
        return searchReducer.booksConter
    })

    return (
        <>
            <div className="wrapper mt-5 p-5">
                <h4 className="text-center mb-5">Found {booksCounter} results</h4>

                    <div className="row row-flex">
                        {booksList.map((el: BookType, index) => <Card bookInfo={el} key={el.id + index} />)}
                    </div>
                </div>
        </>
    )
}
