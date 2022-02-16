import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoreBooks } from '../app/asyncAction';
import { RootState } from '../app/rootReducer';

type LoadMoreBtnProps = {
    searchText: string,
    category: string,
    sorting: string,
}

export default function LoadMoreBtn(props:LoadMoreBtnProps): JSX.Element {
    const dispatch = useDispatch()
    const shownBoks = useSelector((state:RootState) => {
        const { searchReducer } = state
        return searchReducer.shownBooks
    })

    const handleClick = () => {
        dispatch(fetchMoreBooks(props.searchText, props.sorting, props.category, shownBoks))
    }

    return (
        <div className="text-center">
            <button onClick={handleClick} type="button" className="btn btn-secondary btn-lg m-5 mx-auto load-more-btn"><h2>Load more</h2></button>
        </div>
    )
}
