import React, { useState } from "react";
import { BookData } from "../utils/mockdata";
import AddBook from "./AddBook";
import BookList from "./BookList";

const BookManager = () => {
  const [books, setBooks] = useState(BookData);

  const handleAddBook = (newBook) => {
    setBooks([newBook, ...books]);
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <AddBook onAdd={handleAddBook} />
      <h2>Book List</h2>
      <BookList booksData={books} />
    </div>
  );
};

export default BookManager;