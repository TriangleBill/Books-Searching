import { SetStateAction} from 'react'
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../app/asyncAction';
import { Dispatch } from 'react';

type HeaderProps = {
    searchText: string,
    category: string,
    sorting: string,
    setSearchText: (value:string) => void,
    setCategory: (value:string) => void,
    setSorting: (value:string) => void
}

export default function Header(props: HeaderProps): JSX.Element {

    const dispatch = useDispatch()

    const handleInput = (e:any) => {
        props.setSearchText(e.target.value)
    }

    const handleSelectCategory = (e:any) => {
        props.setCategory(e.target.value)
    }

    const handleSelectSorting = (e:any) => {
        props.setSorting(e.target.value)
    }

    const submitHandler = (e: any) => {
        e.preventDefault()
        dispatch(fetchBooks( props.searchText,  props.sorting,  props.category))
    }

    return (
        <div className="container">
            <h1>Search for books</h1>

            <form onSubmit={submitHandler} action="">
                <div className="search-input">
                    <input onChange={handleInput} value={ props.searchText} type="text" className="form-control" placeholder="Enter your search..." />
                    <input type="submit" hidden />
                    <button onClick={submitHandler} className='search-btn'></button>
                </div>
                <div className="row">
                    <div className="col"><h5>Categories</h5></div>
                    <div className="col">
                        <div className="dropdown">
                            <select defaultValue='all' onChange={handleSelectCategory} className="form-select" aria-label="Default select example">
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
                    <div className="col"><h5>Sortin by</h5></div>
                    <div className="col">
                        <div className="dropdown">
                            <select defaultValue='relevance' onChange={handleSelectSorting} className="form-select" aria-label="Default select example">
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
