import React, { createContext, useState } from "react";
import { BookData } from "../utils/mockdata";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(BookData);

  const addBook = (book) => setBooks([book, ...books]);

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};