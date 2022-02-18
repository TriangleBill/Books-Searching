import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookType } from '../app/types';

type CardProps = {
    bookInfo: BookType
}

function Card({ bookInfo }: CardProps) {
    const bookId = bookInfo.id
    const navigate = useNavigate()

    const bookImage = () => {
        if (bookInfo.volumeInfo.imageLinks !== undefined) {
            return bookInfo.volumeInfo.imageLinks.thumbnail
        } else {
            return './img/placeholder.png'
        }
    }

    const handleClick = () => {
        navigate(`/book/${bookId}`)
    }

    return (
        <div data-testid="book-card" className="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-5 my-md-2" style={{cursor: 'pointer'}}>
            <div onClick={handleClick} className="card book-card p-3 ">
                <img style={{ maxWidth: '300px', maxHeight: '430px' }} className="card-img-top mx-auto" src={bookImage()} alt="Card capture" />
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted"><ins>{(bookInfo.volumeInfo.categories) ? bookInfo.volumeInfo.categories[0] : ''}</ins></h6>
                    <h5 className="card-title mt-3 mb-3">{(bookInfo.volumeInfo.title) ? bookInfo.volumeInfo.title : ''}</h5>
                    <div className="card-text text-muted">
                        {(bookInfo.volumeInfo.authors) ?
                            bookInfo.volumeInfo.authors.join(', ')
                            : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default memo(Card)