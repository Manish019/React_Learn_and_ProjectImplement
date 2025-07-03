
import React from 'react'
import './/App.css';


import ParentComponents from './Components/ParentComponents'
import Profile from './Components/Profile';
import ConditionRenderList from './Components/ConditionRenderList';

function App() {

  return (
    <>
    <div className='container mx-auto'>
      {/* <ParentComponents />
      <Profile /> */}

      <ConditionRenderList  message="Hello ! I am learning React" />

{/* State is Isolated and Private */}
            {/* <ConditionRenderList  message="Hello ! I am learning React" /> */}


      </div>
    </>
  )
}

export default App
