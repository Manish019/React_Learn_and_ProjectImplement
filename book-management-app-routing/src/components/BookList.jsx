import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";
import { Link } from "react-router-dom";

const BookList = () => {
  const { books } = useContext(BookContext);

  if (!Array.isArray(books) || books.length === 0) {
    return <p>No books available.</p>;
  }

  const truncate = (str, n) => {
    return str.split(" ").slice(0, n).join(" ") + (str.split(" ").length > n ? "..." : "");
  };

  return (
    <div className="bookList">
      {books.map((data) => (
        <Link to={`/book-details/${data.id}`} key={data.id}>
          <BookDetails bookInfo={{ ...data, description: truncate(data.description, 20) }} />
        </Link>
      ))}
    </div>
  );
};

export default BookList;