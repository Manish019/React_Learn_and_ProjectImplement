import React from 'react'

const ChildComponents = (props) => {

   //console.log(props, "Props");
  // props always return object


  return (
    <>
    <div className='w-full mt-5'>
      
      <h1 className='text-2xl'>This Is Child Components</h1>
      <h2>{props.Books}</h2>
      <h2>{props.Subject}</h2>

    </div>
    </>
  )
}

export default ChildComponents