import React from 'react';
import { Link } from 'react-router-dom';
import noImageDisplay from './../no_image_display.jpg';

const Books = ({ searchedBooks }) => {
    const booksArray = searchedBooks.items || [];

    return (
        <div className='books_container'>
            
            {booksArray.map((book, index) => {

                return (
                    <Link key={index} className='book_link'
                        to={`/books/${index}`}
                        state={{
                            description: book.volumeInfo.description,
                            categories: book.volumeInfo.categories,
                            title: book.volumeInfo.title,
                            publisher: book.volumeInfo.publisher,
                            pageCount: book.volumeInfo.pageCount,
                            previewLink: book.volumeInfo.previewLink,
                            authors: book.volumeInfo.authors,
                            imageLinks: book.volumeInfo.imageLinks
                          }}
                    >

                        <div className='book_wrapper'>

                            {book.volumeInfo.imageLinks ? (
                                <img width="128" height="158" src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                            ) : (
                                <img width="158" height="158" src={noImageDisplay} alt="No Image" />
                            )}
                            <p className='book_title'>{book.volumeInfo.title}</p>
                            {/* <p>{book.volumeInfo.description}</p> */}
                            <p className='book_authors'>
                                <span className="label">Wriiten by: </span>
                                {book.volumeInfo.authors.map((author, index, arr) => {
                                    return <span key={index} className='authors'>{author}{index === arr.length - 1 ? ' ' : ', '} </span> 
                                })}
                            </p>
                        </div>
                    </Link>
                )
            })}

        </div>
    );
};

export default Books;
