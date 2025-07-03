import React from 'react'

const Avatar = (props) => {
  return (
    <>
   <div className='gap-4 px-2'>
    {/* <img src='public/BillGates.jpg' alt='Bill Gates' /> OR */} 
        {/* <img src='../BillGates.jpg' alt='Bill Gates' /> */}

<img src={props.image} alt='profile pic'/>

</div>
    </>
  )
}

export default Avatar