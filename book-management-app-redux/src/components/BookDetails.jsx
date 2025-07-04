
import './style.css';


const BookDetails = ({ bookInfo }) => {
  if (!bookInfo) return null;
  return (
  <>
  <div className="book-card">
    <img src={bookInfo.imgUrl} alt="author"  className='images-cover' width="150" height="300"/>
    <div className="card-details">
      <h2 className='card-title'>{bookInfo.title}</h2>
      <h3 className='card-author'>{bookInfo.author}</h3>
      <span className='card-category'>{bookInfo.category}</span>
      <p className='card-rating'>{bookInfo.ratings}</p>
      <p className='card-parag'>{bookInfo.description}</p>
      <p className='viewlink'>View More</p>
      {/* <div className='btn-outer'>
      <button className='button-add'>View More</button>
      </div> */}
    </div>
  </div>

  </>

  )
}

export default BookDetails;