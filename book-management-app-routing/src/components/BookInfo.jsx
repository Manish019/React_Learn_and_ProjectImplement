import React from 'react'
import { useParams } from 'react-router-dom'
import { BookData } from '../utils/mockdata';

//dynamic routing


const BookInfo = () => {

  const params = useParams();
  // console.log(id);
  const book=  BookData.filter(book => book.id == params.id)

  return (
    <>
    <div className='container'>
   {/* <h2>{`Book Information for Book Id : ${params.id} `}</h2> */}


{
  book.map(book =>{

     return (
  <>
  <div className="book-info">
    <img src={book.imgUrl} alt="author"  className='images-cover' width="300" height="250"/>
    <div className="card-details">
      <h2 className='card-title'>{book.title}</h2>
      <h3 className='card-author'>{book.author}</h3>
      <span className='card-category'>{book.category}</span>
      <p className='card-rating'>{book.ratings}</p>
      <p className='card-parag'>{book.description}</p>
      {/* <div className='btn-outer'>
      <button className='button-add'>View More</button>
      </div> */}
    </div>
  </div>

  </>

  )

  })}

</div>
    </>
  )
}

export default BookInfo