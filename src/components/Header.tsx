import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchBooks } from '../app/asyncAction';
import { RootState } from '../app/rootReducer';
import { setSearchText, setCategory, setSorting } from './../app/action';

function Header(): JSX.Element {
    const navigate = useNavigate()
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

    const handleInput = (e:any) => {
        dispatch(setSearchText(e.target.value))
    }

    const handleSelectCategory = (e:any) => {
        dispatch(setCategory(e.target.value))
    }

    const handleSelectSorting = (e:any) => {
        dispatch(setSorting(e.target.value))
    }

    const submitHandler = (e: any) => {
        e.preventDefault()
        navigate('/')
        dispatch(fetchBooks( searchText,  sorting,  category))
    }

    return (
        <div className="container">
            <h1>Search for books</h1>

            <form onSubmit={submitHandler} action="">
                <div className="search-input">
                    <input onChange={handleInput} value={ searchText} type="text" className="form-control" placeholder="Enter your search..." />
                    <input type="submit" hidden />
                    <button onClick={submitHandler} className='search-btn'></button>
                </div>
                <div className="row">
                    <div className="col-6 col-sm mb-3"><h5>Categories</h5></div>
                    <div className="col-6 col-sm">
                        <div className="dropdown">
                            <select defaultValue={category} onChange={handleSelectCategory} className="form-select" aria-label="Default select example">
                                <option value="all">all</option>
                                <option value="art">art</option>
                                <option value="biography">biography</option>
                                <option value="computers">computers</option>
                                <option value="history">history</option>
                                <option value="medical">medical</option>
                                <option value="poetry">poetry</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6 col-sm"><h5>Sortin by</h5></div>
                    <div className="col-6 col-sm">
                        <div className="dropdown">
                            <select defaultValue={sorting} onChange={handleSelectSorting} className="form-select" aria-label="Default select example">
                                <option value="relevance">relevance</option>
                                <option value="newest">newest</option>
                            </select>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default memo(Header)
