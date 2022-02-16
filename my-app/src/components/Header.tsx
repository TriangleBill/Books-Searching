import React from 'react'

export default function Header(): JSX.Element {
    return (
        <div className="container">
            <h1>Search for books</h1>

            <form action="">
                <div className="search-input">
                    <input type="text" className="form-control" placeholder="Enter your search..." />
                    <button className='search-btn'></button>
                </div>
                <div className="row">
                    <div className="col"><h5>Categories</h5></div>
                    <div className="col">
                        <div className="dropdown">
                            <select className="form-select" aria-label="Default select example">
                                <option value="1" selected>all</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="col"><h5>Sortin by</h5></div>
                    <div className="col">
                        <div className="dropdown">
                            <select className="form-select" aria-label="Default select example">
                                <option value="1" selected>relevance</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}
