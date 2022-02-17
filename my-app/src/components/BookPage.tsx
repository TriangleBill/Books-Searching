
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header"
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook } from './../app/asyncAction';
import { RootState } from "../app/rootReducer";
import Loader from "./Loader";

export default function BookPage(): JSX.Element {
    const dispatch = useDispatch()
 
    const params = useParams<{ id?: string }>();

    const book = useSelector((state: RootState) => {
        const { fetchReducer } = state
        return fetchReducer.book
    })


    const bookImage = () => {
        if (book.volumeInfo.imageLinks !== undefined && book.volumeInfo.imageLinks.medium !== undefined) {
            return book.volumeInfo.imageLinks.medium
        } else if (book.volumeInfo.imageLinks !== undefined && book.volumeInfo.imageLinks.thumbnail !== undefined) {
            return book.volumeInfo.imageLinks.thumbnail
        } else return './img/placeholder-medium.png'
    }

    const bookCategory = () => {
        if (book.volumeInfo.categories !== undefined) {
            return book.volumeInfo.categories.join('/')
        } else return ''
    }

    const bookAuthors = () => {
        if (book.volumeInfo.authors !== undefined) {
            return book.volumeInfo.authors.join(', ')
        } else return ''
    }

    useEffect(() => {
        dispatch(fetchBook(params.id as string))
    }, [params.id, dispatch])


    const renderReduslt = () => {
        if (book.volumeInfo.title !== undefined) {
            return (
                <div className="wrapper mt-5 p-5 row">
                    <div className="col-xl-5 col-12 book-poster">
                        <img src={bookImage()} alt="Book poster" className="img-fluid mx-auto d-block my-5" />
                    </div>
                    <div className="col-xl-7 col-12 book-info p-3 p-xl-5">
                        <h5 className="mb-2 text-muted">{bookCategory()}</h5>
                        <h2 className="mt-3 mb-3">{book.volumeInfo.title}</h2>
                        <h5 className="text-muted"><ins>{bookAuthors()}</ins></h5>

                        <div className="book-description">
                            <p>{book.volumeInfo.description}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Loader />
        }
    }

    return (
        <>
            <Header />

            {renderReduslt()}

            {/* <div className="wrapper mt-5 p-5 row">
                <div className="col-md-5 col-sm-6 book-poster">
                    <img src={bookImage()} alt="Book poster" className="img-fluid mx-auto d-block my-5" />
                </div>
                <div className="col-md-6 col-sm-6 book-info p-3 p-sm-5">
                    <h5 className="mb-2 text-muted">{book.volumeInfo.categories.join('/')}</h5>
                    <h2 className="mt-3 mb-3">{book.volumeInfo.title}</h2>
                    <h5 className="text-muted"><ins>{book.volumeInfo.authors.join(', ')}</ins></h5>

                    <div className="book-description">
                        <p>Description</p>
                    </div>
                </div>
            </div> */}
        </>
    )
}
