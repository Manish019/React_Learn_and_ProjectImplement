import React from 'react'
import Avatar from './Avatar'

const Profile = () => {
  return (
    <>
    <h1 className='text-3xl mb-5 mt-5 text-red-800' >Profile Image</h1>
<div className='flex'>
    <Avatar  image="../BillGates.jpg" />
    <Avatar  image="../elon-mask.jpg" />
    </div>
    </>
  )
}

export default Profile