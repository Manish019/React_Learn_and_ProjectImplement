import React from 'react'

const ItemList = (props) => {

  // condition use
if (props.isItem){
//return null; // not showing the check item
return (
    <>
    <li>{props.name} ☑</li>
    </>
  )
}
else{
  return (
    <li>{props.name} ☒</li>
  )
}



  
}

export default ItemList