import React from 'react'
import ItemList from './ItemList'
import ItemListTwo from './ItemListTwo'

const ConditionRenderList = (props) => {

  // List of the Items


  
  const Items = [
    {
      id:1,
      name: "Clotes",
      isItem: true
    },
       {
      id:2,
      name: "Chasma",
      isItem: false
    },
       {
      id:3,
      name: "Make Up",
      isItem: true
    },
       {
      id:4,
      name: "Shopping",
      isItem: false
    }
  ];

function handleClick (){
// console.log(props.Message);
alert(props.message);
  
}

// onMouseHover = mouseHover







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
          {
          Items.map((item, index) => {
            return <ItemListTwo key={item.id} data={item}></ItemListTwo>
          })
          }


          <button onClick={handleClick} className='border mt-5 p-2'>Click Me!</button>

          {/* Arrow Function */}
          <button className='border p-2' onClick={() => {
            alert("I am Clicked !")
          }}>Second Button</button>
    </>
  )
}

export default ConditionRenderList