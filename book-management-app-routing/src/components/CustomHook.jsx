import React, { useEffect, useState } from 'react'

const CustomHook = () => {


 const [status, setStatus] = useState(true);


 useEffect(() => {
  
 const Online = winddow.addEventListner("online" ,() => {
  setStatus(true);
 })

  const Offline = winddow.addEventListner("offline" ,() => {
  setStatus(false);
 })



 }, []);







  return (
    <div>CustomHook</div>
  )
}

export default CustomHook