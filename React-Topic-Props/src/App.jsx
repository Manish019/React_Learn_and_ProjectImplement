
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

      <ConditionRenderList />

      </div>
    </>
  )
}

export default App
