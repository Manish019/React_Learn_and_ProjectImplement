import React from 'react'

const ItemListTwo = (props) => {
  return (
   <>
   {/* condition ternory Operator */}
   {/* <li>{props.isItem ? props.name + "☑" : props.name}</li>; */}

{/* Logical Operator */}
<li>
  {props.data.name}
  {props.data.isItem && "☑"}
  </li>

   </>
  )
}

export default ItemListTwo