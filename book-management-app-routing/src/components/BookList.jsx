import { Link } from "react-router-dom";
import BookDetails from "./BookDetails";
import './style.css';

function BookList(props) {
  const books = props.booksData;

  if (!Array.isArray(books) || books.length === 0) {
    return <p>No books available.</p>;
  }

  // Helper to truncate description
  const truncate = (str, n) => {
    return str.split(" ").slice(0, n).join(" ") + (str.split(" ").length > n ? "..." : "");
  };

  return (
    <div className="bookList">
      {books.map((data) => (
        <Link to={`/book-details/${data.id}`} key={data.id} className="link-list">
          <BookDetails bookInfo={{ ...data, description: truncate(data.description, 20) }} />
        </Link>
      ))}
    </div>
  );
}

export default BookList;