

import BookList from "./components/BookList"
import { BookData } from "./utils/mockdata"
import "./components/style.css"
import { useState } from "react"

function App() {

const [searchText, setSearchText] = useState("");

const [filteredBooks, setFilteredBooks] = useState(BookData)

  function handleSearch () {
// console.log("searchText", searchText);
//filtering the books
  const filterBooks = BookData.filter((book) => 
  book.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
);
// console.log("filtered books", filteredBooks);

setFilteredBooks(filterBooks);



  }




  return (
    <>
    <div className="container">
      
      <h1 className="heading-text">Online Book Managment Application</h1>
      <div className="search-box">
        <h2>Search Books</h2>
      <div className="search-inner">
        <input type="text"  onChange={(e) =>setSearchText(e.target.value) } />
      <button onClick={handleSearch} className="search-btn">Search</button>
      </div>
      </div>
          
      <BookList  booksData={filteredBooks} />   
      </div>
    </>
  )
}

export default App
