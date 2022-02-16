import React from 'react'

export default function card() {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="card m-5 m-md-2 p-3 book-card">
                <img className="card-img-top" src="./img/book-cover.png" alt="Card image cap" />
                    <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted"><ins>Category</ins></h6>
                    <h5 className="card-title mt-3 mb-3">Title</h5>
                    <div className="card-text text-muted">Author</div>
                    </div>
            </div>
        </div>
    )
}
