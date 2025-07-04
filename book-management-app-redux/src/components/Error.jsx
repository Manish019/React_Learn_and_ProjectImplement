import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {

const err = useRouteError();
console.log(err, "err");



  return (
  <>
  <h1>Opps!</h1>
<h2>{err.statusText}</h2>
<p>{err.status}</p>
  <h4>{err.data}</h4>

  
  </>

  )
}

export default Error;