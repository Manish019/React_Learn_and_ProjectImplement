import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// import { BookContext } from "../pages/BookContext";
import { useSelector } from 'react-redux';
// import BookDetails from './BookDetails';

const BookInfo = () => {
  const params = useParams();
  // const { books } = useContext(BookContext);
const books = useSelector((state) => state.books.books);
  // Find the book by ID from the context
  const book = books.find((book) => String(book.id) === params.id);

  if (!book) return <p>Book not found.</p>;

  return (
    <>
    <div className='container'>
      <div className="book-info">
        <img
          src={book.imgUrl}
          alt={book.title}
          className='images-cover'
          width="300"
          height="250"
        />
        <div className="card-details">
          <h2 className='card-title'>{book.title}</h2>
          <h3 className='card-author'>{book.author}</h3>
          <span className='card-category'>{book.category}</span>
          <p className='card-rating'>{book.ratings || '⭐ Not Rated'}</p>
          <p className='card-parag'>{book.description}</p>
        </div>
      </div>
    </div>
  
     {/* <BookDetails bookInfo={book} /> */}
    
    
    </>
  );
};

export default BookInfo;
