import React, {useState, useEffect } from "react";
// import { BookContext } from "../pages/BookContext.jsx";
import BookDetails from "./BookDetails";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookList = () => {
  // const { books } = useContext(BookContext);
const books = useSelector((state) => state.books.books);


  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books || []);

  useEffect(() => {
    // Reset filtered books when book context changes
    setFilteredBooks(books);
  }, [books]);

  const handleSearch = () => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const truncate = (str, n) => {
    return str.split(" ").slice(0, n).join(" ") + (str.split(" ").length > n ? "..." : "");
  };

  return (
    <div className="search-box">
      <h2>Search Books</h2>
      <div className="search-inner">
        <input
          type="text"
          placeholder="Search by title"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch} className="search-btn">Search</button>
      </div>

      <div className="bookList">
        {filteredBooks.length === 0 ? (
          <p>No books found.</p>
        ) : (
          filteredBooks.map((data) => (
            <Link to={`/book-details/${data.id}`} key={data.id}>
              <BookDetails bookInfo={{ ...data, description: truncate(data.description, 20) }} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default BookList;
