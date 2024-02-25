import { useParams, useLocation } from "react-router-dom";
import Header from "./Header";
import { Link } from 'react-router-dom';
import Footer from "./Footer";

const BookDetails = () => {
    const { id } = useParams();
    const location = useLocation();

    const {
        description,
        categories,
        title,
        publisher,
        pageCount,
        previewLink,
        authors,
        imageLinks
    } = location.state;

    return (
        <div className="bookdetails">
            <Header />
            <Link className="backButton" to='/'>Back</Link>
            <div className="book_container">
                <div className="book_left_col">
                    <img className="large_thumbnail" src={imageLinks.thumbnail} alt={title} />
                </div>
                <div className="book_right_col">
                    <h1>{title}</h1>
                    <div className="categories">
                        <span className="label">Book ID: </span>
                        <span>{id}</span>
                    </div>
                    <div className="categories">
                        <span className="label">Category: </span>
                        <span>{categories}</span>
                    </div>
                    <div className="pagecount">
                        <span className="label">Page count: </span>
                        <span>{pageCount}</span>
                    </div>
                    <div className="authors">
                        <span className="label">Author: </span>
                        {authors.map((author, index, arr) => {
                            return <span key={index}>{author}{index === arr.length - 1 ? ' ' : ', '}</span>
                        })}
                    </div>
                    <div className="publisher">
                        <span className="label">Publisher: </span>
                        <span>{publisher}</span>

                    </div>
                    <div className="description">
                        <span className="label">Description: </span>
                        <p>{description}</p>
                    </div>

                    <div className="previewLink">

                        <a href={previewLink} target="_blank">Preview Link</a>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default BookDetails;