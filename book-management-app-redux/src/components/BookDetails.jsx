
import './style.css';


function BookDetails(props){

  return (
  <>
  <div className="book-card">
    <img src={props.bookInfo.imgUrl} alt="author"  className='images-cover' width="150" height="300"/>
    <div className="card-details">
      <h2 className='card-title'>{props.bookInfo.title}</h2>
      <h3 className='card-author'>{props.bookInfo.author}</h3>
      <span className='card-category'>{props.bookInfo.category}</span>
      <p className='card-rating'>{props.bookInfo.ratings}</p>
      <p className='card-parag'>{props.bookInfo.description}</p>
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