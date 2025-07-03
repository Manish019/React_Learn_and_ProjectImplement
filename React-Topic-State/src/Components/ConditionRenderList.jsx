import React, { useState } from 'react'
// import ItemList from './ItemList'
// import ItemListTwo from './ItemListTwo'

import { Items } from '../utils/mockdata'

const ConditionRenderList = (props) => {


  // useState uses
   const[index, setIndex] = useState(0);

   const [showMore, setShowMore] = useState(true);

  // List of the Items
const item = Items[index];

function handleClick (){
  if(index == 3 ? setIndex(0) :setIndex (index + 1));
  //  console.log(index, "Index");

}


// onMouseHover = mouseHover



// handle show dta
 function handleShowData () {

  setShowMore(!showMore);

 }





  return (
    <>
        <h1 className='text-2xl'>Item List of Packging</h1>
       
          {/* <ItemList name='Clothes' isItem={true}></ItemList>
          <ItemList name='Chasma' isItem={false}></ItemList>
          <ItemList name='Make Up' isItem={true}></ItemList>
          <ItemList name='Shopping' isItem={false}></ItemList> */}

           {/* <ItemListTwo name='Clothes' isItem={true}></ItemListTwo>
          <ItemListTwo name='Chasma' isItem={false}></ItemListTwo>
          <ItemListTwo name='Make Up' isItem={true}></ItemListTwo>
          <ItemListTwo name='Shopping' isItem={false}></ItemListTwo>       */}

          {/* using Map Property */}
          {/* {
          Items.map((item, index) => {
            return <ItemListTwo key={item.id} data={item}></ItemListTwo>
          })
          } */}

          <h2 className='text-2xl mb-5 mt-5 text-red-600 uppercase'>{item.name}</h2>
          <img src={item.url} alt=""  width="200px" height="150px" />
          {/* ! not show remove ! this mean show the content */}
           <p>{!showMore && item.description}</p>

          <button onClick={handleClick} className='border mt-5 p-2'>Next Items</button>
        
        {/* Giving a Component Multiple State Variables */}

        <button className='border p-2 px-5 ml-2' onClick={handleShowData}>{showMore ? "Show" : "Hide"} Description</button>
         
    </>
  )
}

export default ConditionRenderList