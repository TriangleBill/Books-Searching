import { useDispatch, useSelector } from 'react-redux';
import { fetchMoreBooks } from '../app/asyncAction';
import { RootState } from '../app/rootReducer';

export default function LoadMoreBtn(): JSX.Element {
    const dispatch = useDispatch()
    const searchText = useSelector((state: RootState) => {
        const { searchReducer } = state
        return searchReducer.searchText
    })

    const category = useSelector((state: RootState) => {
        const { searchReducer } = state
        return searchReducer.category
    })

    const sorting = useSelector((state: RootState) => {
        const { searchReducer } = state
        return searchReducer.sorting
    })

    const shownBoks = useSelector((state:RootState) => {
        const { searchReducer } = state
        return searchReducer.shownBooks
    })

    const handleClick = () => {
        dispatch(fetchMoreBooks(searchText, sorting, category, shownBoks))
    }

    return (
        <div className="text-center">
            <button onClick={handleClick} type="button" className="btn btn-secondary btn-lg m-5 mx-auto load-more-btn"><h2>Load more</h2></button>
        </div>
    )
}
