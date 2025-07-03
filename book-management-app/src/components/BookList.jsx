import BookDetails from "./BookDetails";
import './style.css';

function BookList(props) {
  // console.log(props, "props");

  return (
    <>
<div className="bookList">
    {/* higher order function use in map method */}

      {props.booksData.map((data) => (
      <BookDetails bookInfo={data} key={data.id} />

      ))}
      </div>
    </>
  );
}

export default BookList;
